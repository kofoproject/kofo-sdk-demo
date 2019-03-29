const {Kofo, Utils} = require('kofo-sdk');
const fs = require('fs');
const _ = require('lodash');
const config = require('./config');
const signUtil = require('./util/sign_util');
const FIELDS = ['deviceId', 'kofoId', 'nonce', 'overwrite', 'timestamp'];


let createMqOptions = (options) => {
    options = _.cloneDeep(options);
    if (!options.hasOwnProperty('timestamp')) {
        options.timestamp = new Date().getTime();
    }
    if (!options.hasOwnProperty('kofoId')) {
        options.kofoId = Utils.createKofoIdBySecret(options.secret);
    }
    let secret = options.secret;
    options = _.pick(options, FIELDS);

    let usernameArrays = _.map(FIELDS.sort(), (key) => {
        return `${key}=${options[key]}`;
    });
    let username = usernameArrays.join('&');
    let password = Utils.sign(secret, username);
    return {username, password, kofoId: options.kofoId};

};

class Service {
    constructor(options) {
        this.options = options;
        this.cachePath = `${__dirname}/cache/${options.roleEnum}.json`;
    }

    _read() {
        let data = fs.readFileSync(this.cachePath);
        return JSON.parse(data.toString());
    }

    insertData(key, value) {
        let data = _read();
        data = Object.assign(data, {[key]: value});
        fs.writeFileSync(this.cachePath, JSON.stringify(data));
    }

    readData(key) {
        let data = this._read();
        return data[key];
    }


    cleanCache() {
        fs.writeFileSync(this.cachePath, '{}');
    }


    resetMqOptions() {
        let options = this.options;
        return createMqOptions(options, null);
    }


    async signatureTxHandler(data) {
        let {type, chain, currency, publicKey, rawTransaction, settlementId} = data;
        let {privateKey} = this.options;
        console.log(`Kofo signature notice 【${_.toUpper(data.type)}】 :`);
        console.log(data);
        console.log('\n');
        let chain_c = _.toUpper(chain);
        let signedRawTransaction = await signUtil(chain, currency, rawTransaction, privateKey[chain_c], publicKey);
        this.kofo.signatureCallback(type, chain, currency, settlementId, signedRawTransaction);
    };

    listener(data) {
        console.log(`Kofo status notice 【${data.type}】 :`);
        console.log(data);
        console.log('\n');
    };

    run() {
        this.options.clean && this.cleanCache();

        let options = {
            mqUrl: config.MQ_URL,
            gateway: config.GATEWAY_URL,
            settlement: config.SETTLEMENT_URL,
            insertData: this.insertData,
            readData: this.readData,
            resetMqOptions: this.resetMqOptions.bind(this),
            mqOptions: createMqOptions(this.options),
            cacheEncrypt: false,
        };

        this.kofo = Kofo.init(options);

        this.kofo.subscribe('kofo_status_notice', this.listener);

        this.kofo.subscribe('kofo_tx_signature', this.signatureTxHandler);
    }

}

module.exports = Service;



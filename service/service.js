const {Kofo, Utils} = require('kofo-sdk');
const KofoWallet = require('kofo-wallet');
const fs = require('fs');
const _ = require('lodash');
const FIELDS = ['deviceId', 'kofoId', 'nonce', 'overwrite', 'timestamp'];
const Identifier = require('../common/identifier');
const Connection = require('../common/connection');

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
        let data = this._read();
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

    async trxSign(privateKey, rawTransaction) {

        let identifier = new Identifier('TRX', 'TRX');

        if (!key) {
            throw new Error('Not find sign private.');
        }

        let connection = new Connection({
            identifier,
            url: this.options.gateway,
            level: 'info',
            label: "gateway"
        });

        let {signedRawTransaction} = await connection.post('/sign', {rawTransaction, privateKey});
        return signedRawTransaction;
    }



    resetMqOptions() {
        let options = this.options;
        return createMqOptions(options);
    }


    async signatureTxHandler(data) {
        let {type, chain, currency, rawTransaction, settlementId} = data;
        console.log(`******* KOFO【${settlementId}】SIGNATURE NOTICE: ${_.toUpper(data.type)}, params=${JSON.stringify(data)}`);

        let privateConfig = _.find(this.options.blockChain, {chain: _.toUpper(chain)});
        if (!privateConfig) {
            throw new Error('Corresponding private key library for the chain was not found. chain=' + _.toUpper(chain))
        }
        let {privateKey, network} = privateConfig;

        try {
            let signedRawTransaction;
            if (chain.toUpperCase() === 'TRX') {
                signedRawTransaction = await this.trxSign(privateKey, rawTransaction);
            } else {
                let wallet = KofoWallet.importPrivateWallet({chain, currency, privateKey, network});
                signedRawTransaction = await wallet.sign(rawTransaction);

            }
            this.kofo.signatureCallback(type, chain, currency, settlementId, signedRawTransaction);
        } catch (e) {
            console.log('sign error: ' + e.message)
        }
    };

    listener(data) {
        if (data.type === 'init_sdk' && data.status !== 'success') {
            return console.log(`${_.toUpper(data.type)}=${data.status}, message=${data.message}`)
        }
        if(data.type==='init_sdk'){
            return console.log(`+++++++ KOFO STATUS NOTICE: ${_.toUpper(data.type)}, params=${JSON.stringify(data)}`)
        }
        console.log(`+++++++ KOFO【${data.settlementId}】STATUS NOTICE: ${_.toUpper(data.type)}, params=${JSON.stringify(data)}`)
        console.log('\n');

    };

    run() {
        let option = this.options;
        option.clean && this.cleanCache();

        let options = {
            mqUrl: option.mqtt,
            gateway: option.gateway,
            settlement: option.settlement,
            insertData: this.insertData.bind(this),
            readData: this.readData.bind(this),
            resetMqOptions: this.resetMqOptions.bind(this),
            mqOptions: createMqOptions(option),
            cacheEncrypt: false,
        };

        this.kofo = Kofo.init(options);

        this.kofo.subscribe('kofo_status_notice', this.listener.bind(this));

        this.kofo.subscribe('kofo_tx_signature', this.signatureTxHandler.bind(this));
    }
}

module.exports = Service;

const _ = require('lodash');
const ecc = require('eosjs-ecc');
const {Wallet: __wallet__, utils} = require("ethers");
const TronUtil = require('./packages/tron-util');


function EosSign(privateKey, rawTransaction) {
    if (_.isArray(rawTransaction)) {
        return _.map(rawTransaction, (doc) => {
            return ecc.signHash(doc, privateKey);
        })
    }
    return ecc.signHash(rawTransaction, privateKey);

}

async function EthSign(privateKey, rawTransaction) {
    let wallet = new __wallet__(privateKey);
    let tx = utils.parseTransaction(rawTransaction);
    return await wallet.sign(tx);
}

function TronSign(privateKey, rawTransaction) {
    return TronUtil.signRawTransaction(privateKey, rawTransaction);
}

const mapping = {
    'EOS': EosSign,
    'BOS': EosSign,
    'ETH': EthSign,
    'TRON': TronSign
};

//chain 只支持 BOS/EOS/ETH/TRON
async function sign(chain, privateKey, rawTransaction) {
    chain = chain.toUpperCase();
    let provider = mapping[chain];
    if (!provider) {
        throw new Error('chain error.');
    }
    let signed = await provider(privateKey, rawTransaction);
    console.log(signed);
    return signed;
}

// 更改这三个参数
const chain = 'EOS';
const privateKey = '5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ';
const rawTransaction = '57ff1ad29d7c0ce27bfd64246b784d434e80a5661da98e67fe16a20d7147dc97';


//使用方式
sign(chain, privateKey, rawTransaction).catch(console.log);
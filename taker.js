const Service = require('./service');

/**
 * Taker account
 * ETH:{
 *        account: "0x5c7c9E06cf9FAF957FC950887978A9434d0b5ABB",
 *        privateKey: "02DB31472EB7FF0F42C8E815BFAA541CE563AA894CB3A66E4C6616427A6BD954",
 *        publicKey: "0x0421caaf99e3f0069b7889e2ebed593e2daa4d1f01575e1469787abcf02bbc012ee62e020037be4e944edf2a24d589dba389bd3a61df6f2bbc146abda7f39f69a9"
 *     }
 *
 * EOS:{
 *        account: "drunken",
 *        privateKey: "5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79",
 *        publicKey: "EOS6QtJ3abH4KyGhRas1nLJk7p5PCnvmqik2AiHWELQx45bhk47e9"
 *     }
 *
 * TRON:{
 *        account: "TVdyt1s88BdiCjKt6K2YuoSmpWScZYK1QF",
 *        privateKey: ""e901ef62b241b6f1577fd6ea34ef8b1c4b3ddee1e3c051b9e63f5ff729ad47a1,
 *        publicKey: "033bc6e863badf0e9585d95fe550ab8244008dcc3da12ba27a07338099cea41792"
 *       }
 *
 * BOS:{ account: "bob", privateKey: "5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ", publicKey: "EOS7phDJcnBRdUiru3LNm2pkL5YiBiWPqWGiBnDjYxH1VYjy945qe"}
 *
 */

//Utils.createKofoId()
const kofo = {
    kofoId: 'KOFO29GhUkfBmZTHBeFCcgje9yiJzYAid6wDieT88nU2iawKY',
    pubkey: '03d8a8d1865502059731969f1fc1b090ab78660eb0c5498700029d6a0426123463',
    secret: '982dd19504a8c35536d8e927eaf0675a43e7cd5dbf07335450db4489f048e97c'
};

// taker 对应的 eos 和 eth账号私钥
const privateKey = {
    ETH: '02DB31472EB7FF0F42C8E815BFAA541CE563AA894CB3A66E4C6616427A6BD954',
    EOS: '5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79',
    TRON: 'e901ef62b241b6f1577fd6ea34ef8b1c4b3ddee1e3c051b9e63f5ff729ad47a1',
    BOS: "5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79"
};

const config = {
    privateKey,
    secret: kofo.secret,
    deviceId: '02DB31472EB7FF02F',
    nonce: 1,
    overwrite: 0,
    clean: true,
    roleEnum: 'taker'
};


new Service(config).run();






const Service = require('./service');

/**
 * Maker account
 * ETH:{
 *        account: "0x91C8cBC45D759AE6a826FC434a04b6B7C4Fdd339",
 *        privateKey: "07FED02BDB20EFE5297445472E2AD0647C9E288A5E28A4E0C7C18CEEFC09B470",
 *        publicKey: "0x047ee4370138916819d252686cdee323c5a01c2a203e00eb3b3fb588df9c79562601615e6969375f7bea207b6051940994d1e45fc221b3073ce2a5b97dc20349b9"
 *      }
 *
 * EOS:{
 *        account: "alice",
 *        privateKey: "5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ",
 *        publicKey: "EOS7phDJcnBRdUiru3LNm2pkL5YiBiWPqWGiBnDjYxH1VYjy945qe"
 *      }
 *
 * TRON:{
 *        account: "TAbzgkG8p3yF5aywKVgq9AaAu6hvF2JrVC",
 *        privateKey: ""af7c83e40cc67a355852b44051fc9e34452375ae569d5c18dd62e3859b9be229,
 *        publicKey: "02782a44c9f574ddf833f85333a5c3c90bf7711b92659e34cea5434aca0fe6dcad"
 *      }
 *
 * BOS:{ account: "drunken", privateKey: "5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79", publicKey: "EOS6QtJ3abH4KyGhRas1nLJk7p5PCnvmqik2AiHWELQx45bhk47e9"}
 *
 */

const kofo = {
    kofoId: 'KOFOpjSNV3qkpQJxt8jNKe4Uv5KRruwW1vFhHCLP9jKRzMGa',
    pubkey: '02c5345dad9bc17627eb6127e4c610113d1b7d0848613b91c91cdb8edbaa6f467f',
    secret: '06ac4dbc0019cf86d975a2979a38b802f356510d168a4a985a153b017a71d111'
};


// maker 对应的 eos 和 eth账号私钥
const privateKey = {
    ETH: '07FED02BDB20EFE5297445472E2AD0647C9E288A5E28A4E0C7C18CEEFC09B470',
    EOS: '5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ',
    TRON: 'af7c83e40cc67a355852b44051fc9e34452375ae569d5c18dd62e3859b9be229',
    BOS: "5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ"
};

const config = {
    privateKey,
    secret: kofo.secret,
    deviceId: '07FED02BDB20EFE5',
    nonce: 1,
    overwrite: 0,
    clean: false,
    roleEnum: 'maker'
};

new Service(config).run();

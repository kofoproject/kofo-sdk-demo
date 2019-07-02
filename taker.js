const Service = require('./service/service');
const _ = require('lodash');

const kofo = {
    kofoId: 'KOFO2AnefMtAxCExqrY7ZuSxXbLWqiDHBfcbDPRUtVndooTdY',
    pubkey: '03ef30be8c8c52789614b4bb23908e8656aa3398de42646bbbff1c9a3052fbd4bf',
    secret: 'a44f15939ec30b43918c3c0bfed18e1872190b161a59fb2021725ad1f22a8fef'
};
let config = require('./config/config');

config = _.assign({}, config, kofo, {
    blockChain: [
        {
            chain: 'BOS',
            privateKey: '5Jh1n436LqN2XcXScqo22pg7X66CLrMeM6HxCRVGqoheQEnMeYh'
        },
        {
            chain: 'EOS',
            privateKey: '5Jh1n436LqN2XcXScqo22pg7X66CLrMeM6HxCRVGqoheQEnMeYh'
        },
        {
            chain: 'MEETONE',
            privateKey: '5Jh1n436LqN2XcXScqo22pg7X66CLrMeM6HxCRVGqoheQEnMeYh'
        },
        {
            chain: 'ETH',
            privateKey: '02DB31472EB7FF0F42C8E815BFAA541CE563AA894CB3A66E4C6616427A6BD954'
        },
        {
            chain: 'TRX',
            privateKey: 'e901ef62b241b6f1577fd6ea34ef8b1c4b3ddee1e3c051b9e63f5ff729ad47a1'
        }
    ],
    deviceId: '02DB31472EB7FF02F1',
    nonce: 1,
    overwrite: 0,
    clean: false,
    cachePath: `${__dirname}/cache/taker.json`
});

new Service(config).run();




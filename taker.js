const Service = require('./service/service');
const _ = require('lodash');

const kofo = {
    kofoId: 'KOFO29GhUkfBmZTHBeFCcgje9yiJzYAid6wDieT88nU2iawKY',
    pubkey: '03d8a8d1865502059731969f1fc1b090ab78660eb0c5498700029d6a0426123463',
    secret: '982dd19504a8c35536d8e927eaf0675a43e7cd5dbf07335450db4489f048e97c'
};
let config = require('./config/config');

config = _.assign({}, config, kofo, {
    blockChain: [
        {
            chain: 'BOS',
            privateKey: '5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79'
        },
        {
            chain: 'EOS',
            privateKey: '5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79'
        },
        {
            chain: 'MEETONE',
            privateKey: '5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79'
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
    deviceId: '02DB31472EB7FF02F',
    nonce: 1,
    overwrite: 0,
    clean: false,
    roleEnum: 'taker'
});

new Service(config).run();




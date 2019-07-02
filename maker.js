const Service = require('./service/service');
const _ = require('lodash');
const kofo = {
    kofoId: 'KOFO2BHsbzE6ktUGD9a9xSQjChvQzR7B8eeDkN57wznNSL936',
    pubkey: '03f6ad389f24ace5cf5eb74cb9b3c79ff9a9ecb8899119aca519813f0fe88b9101',
    secret: '3794ff84216d866b8e5f3e890f7dcc2ae3bfe3f3e05809f1c050ab16b93bd491'
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
            privateKey: '07FED02BDB20EFE5297445472E2AD0647C9E288A5E28A4E0C7C18CEEFC09B470'
        },
        {
            chain: 'TRX',
            privateKey: 'af7c83e40cc67a355852b44051fc9e34452375ae569d5c18dd62e3859b9be229'
        }
    ],
    deviceId: '07FED02BDB20EFE52',
    nonce: 1,
    overwrite: 0,
    clean: false,
    cachePath: `${__dirname}/cache/maker.json`
});

new Service(config).run();
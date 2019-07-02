const Service = require('./service/service');
const _ = require('lodash');
const kofo = {
    kofoId: 'KOFOpjSNV3qkpQJxt8jNKe4Uv5KRruwW1vFhHCLP9jKRzMGa',
    pubkey: '02c5345dad9bc17627eb6127e4c610113d1b7d0848613b91c91cdb8edbaa6f467f',
    secret: '06ac4dbc0019cf86d975a2979a38b802f356510d168a4a985a153b017a71d111'
};
let config = require('./config/config');

config = _.assign({}, config, kofo, {
    blockChain: [
        {
            chain: 'BOS',
            privateKey: '5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ'
        },
        {
            chain: 'EOS',
            privateKey: '5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ'
        },
        {
            chain: 'MEETONE',
            privateKey: '5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ'
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
    deviceId: '07FED02BDB20EFE5',
    nonce: 1,
    overwrite: 0,
    clean: false,
    roleEnum: 'maker'
});

new Service(config).run();
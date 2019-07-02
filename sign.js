const KofoWallet = require('kofo-wallet');

const chain = 'EOS';
const currency = 'EOS';
const privateKey = '5KftyBCnWCUf5KnxJYf8Xrtgs91JFRVKDfjn1PSoZbt5Woqz6Px';
const rawTransaction = 'af702ef6a2ebafca7213a0a4d62f039c88e1ddff5248d738c3b5b81a1bfa355b';

let signTx = async () => {
    let wallet = KofoWallet.importPrivateWallet({chain, currency, privateKey});
    console.log(wallet.export());
    let signedTx = await wallet.sign(rawTransaction);
    console.log({signedTx});
};

signTx().catch(console.log);
# kofo sdk test demo

```bash
npm i
```

Demo 中实现了 Maker, Taker 跨链交易的sdk调用, taker和maker对应的账号

# MAKER
```js
  Maker account
  ETH:{
         account: "0x91C8cBC45D759AE6a826FC434a04b6B7C4Fdd339",
         privateKey: "07FED02BDB20EFE5297445472E2AD0647C9E288A5E28A4E0C7C18CEEFC09B470",
         publicKey: "0x047ee4370138916819d252686cdee323c5a01c2a203e00eb3b3fb588df9c79562601615e6969375f7bea207b6051940994d1e45fc221b3073ce2a5b97dc20349b9"
       }

  EOS:{
         account: "alice",
         privateKey: "5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ",
         publicKey: "EOS7phDJcnBRdUiru3LNm2pkL5YiBiWPqWGiBnDjYxH1VYjy945qe"
       }

  TRON:{
         account: "TAbzgkG8p3yF5aywKVgq9AaAu6hvF2JrVC",
         privateKey: ""af7c83e40cc67a355852b44051fc9e34452375ae569d5c18dd62e3859b9be229,
         publicKey: "02782a44c9f574ddf833f85333a5c3c90bf7711b92659e34cea5434aca0fe6dcad"
       }

  BOS:{ account: "drunken", privateKey: "5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79", publicKey: "EOS6QtJ3abH4KyGhRas1nLJk7p5PCnvmqik2AiHWELQx45bhk47e9"}
```

# TAKER
```js
  Taker account
  ETH:{
          account: "0x5c7c9E06cf9FAF957FC950887978A9434d0b5ABB",
          privateKey: "02DB31472EB7FF0F42C8E815BFAA541CE563AA894CB3A66E4C6616427A6BD954",
          publicKey: "0x0421caaf99e3f0069b7889e2ebed593e2daa4d1f01575e1469787abcf02bbc012ee62e020037be4e944edf2a24d589dba389bd3a61df6f2bbc146abda7f39f69a9"
       }

  EOS:{
          account: "drunken",
          privateKey: "5JSRAcfALhELVvTK59umFEXSzY4MkBCL3SPajSZw1BqHyoLtH79",
          publicKey: "EOS6QtJ3abH4KyGhRas1nLJk7p5PCnvmqik2AiHWELQx45bhk47e9"
      }

  TRON:{
          account: "TVdyt1s88BdiCjKt6K2YuoSmpWScZYK1QF",
          privateKey: ""e901ef62b241b6f1577fd6ea34ef8b1c4b3ddee1e3c051b9e63f5ff729ad47a1,
          publicKey: "033bc6e863badf0e9585d95fe550ab8244008dcc3da12ba27a07338099cea41792"
       }

  BOS:{ account: "bob", privateKey: "5JA4QNHpf1HjwAP6SK4MdrWnb2SBAAxrXN5tNfZe6zL1Je7s1MZ", publicKey: "EOS7phDJcnBRdUiru3LNm2pkL5YiBiWPqWGiBnDjYxH1VYjy945qe"}
```


### taker
```bash
node taker.js
```
ps: taker数据存储在cache/taker.json

### maker
```bash
node maker.js
```
ps: maker数据存储在cache/maker.json

具体调用参考 [**kofo api**](https://github.com/kofoproject/kofo-sdk/blob/master/docs/API.md)

### Create preimage and hvalue
```bash
node tx.js
```
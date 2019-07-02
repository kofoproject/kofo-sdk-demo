const {Utils} = require('kofo-sdk');

let s = Utils.createPreImage();
let h = Utils.createHValue(s);
console.log({s, h});
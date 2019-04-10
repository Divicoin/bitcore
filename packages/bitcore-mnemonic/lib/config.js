var Bitcore = require('bitcore-lib');
var Divicore = require('divicore-lib');
var Bicorecash = require('bitcore-lib-cash');

module.exports = {
    VALID_COINS: ['divi', 'btc', 'bch'],
    DEFAULT_COIN: 'divi',

    CORE_LIBS: {
        btc: Bitcore,
        bch: Bicorecash,
        divi: Divicore
    }
}
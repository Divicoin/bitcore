module.exports = {
  BTC: {
    lib: require('bitcore-lib'),
    p2p: require('bitcore-p2p'),
  },
  BCH: {
    lib: require('bitcore-lib-cash'),
    p2p: require('bitcore-p2p-cash'),
  },
  DIVI: {
    lib: require('divicore-lib'),
    p2p: require('divicore-p2p'),
  }
}

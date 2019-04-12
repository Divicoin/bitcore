'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on divicore-p2p Module {0}'
};

module.exports = require('divicore-lib').errors.extend(spec);

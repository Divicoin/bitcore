/**
 * The official client library for bitcore-wallet-service.
 * @module Client
 */

/**
 * Client API.
 * @alias module:Client.API
 */
var client = module.exports = require('./api');

/**
 * Verifier module.
 * @alias module:Client.Verifier
 */
client.Verifier = require('./verifier');
client.Utils = require('./common/utils');
client.sjcl = require('sjcl');

const config = require('./config');
const CORE_LIBS = config.CORE_LIBS;

// Expose bitcore
client.CoreLibs = CORE_LIBS;
client.Bitcore = CORE_LIBS['btc'];
client.BitcoreCash = CORE_LIBS['bch'];
client.Divicore = CORE_LIBS['divi'];

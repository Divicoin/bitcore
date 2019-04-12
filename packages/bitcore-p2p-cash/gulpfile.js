'use strict';

var startGulp = require('bitcore-build');
Object.assign(exports, startGulp('bitcore-p2p', {skipBrowser: true}))

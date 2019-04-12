'use strict';

var should = require('chai').should();
var P2P = require('../../');
var builder = P2P.Messages.builder;
var divicore = require('divicore-lib');

describe('Messages Builder', function() {

  describe('@constructor', function() {

    it('should return commands based on default', function() {
      // instantiate
      var b = builder();
      should.exist(b);
    });

    it('should return commands with customizations', function() {
      // instantiate
      var b = builder({
        network: divicore.Networks.testnet,
        Block: divicore.Block,
        Transaction: divicore.Transaction
      });
      should.exist(b);
    });

  });

});

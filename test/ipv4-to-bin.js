var should = require('chai').should(),
	ipv4ToBin = require('../src/ipv4-to-bin.js');

describe('#ipv4-to-bin', function() {
	it('converts 127.0.0.1 into 01111111.00000000.00000000.00000001;', function() {
		ipv4ToBin('127.0.0.1').should.equal('01111111.00000000.00000000.00000001');
	});

	it('converts 192.168.0.1 into 11000000.10101000.00000000.00000001;', function() {
		ipv4ToBin('192.168.0.1').should.equal('11000000.10101000.00000000.00000001');
	});
});

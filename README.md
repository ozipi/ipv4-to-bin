ipv4-to-bin [![npm version](https://img.shields.io/npm/v/ipv4-to-bin.svg?style=flat)](https://www.npmjs.com/package/ipv4-to-bin) [![Build Status](https://travis-ci.org/ozipi/ipv4-to-bin.svg?branch=master)](https://travis-ci.org/ozipi/ipv4-to-bin) [![Coverage Status](https://coveralls.io/repos/github/ozipi/ipv4-to-bin/badge.svg?branch=master)](https://coveralls.io/github/ozipi/ipv4-to-bin?branch=master)
=========

A small method to convert an ipv4 from decimal to binary keeping the format x.x.x.x

## Installation

  npm install ipv4-to-bin --save

## Usage

  var ipv4ToBin = require('ipv4-to-bin');
  
  var routerIp = ip2bin('192.168.0.1');

  console.log('routerIp', routerIp);

## Tests

  npm test

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code.

@todo:
- add error support for > 255

## Release History

* 0.1.0 Initial release




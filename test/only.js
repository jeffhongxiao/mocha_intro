
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();


describe('foo', function() {
  it.only('foo', function() {
    // true.should.equal(true);
  });
});

describe('bar', function() {
  describe('bar', function() {
    it.only('bar');
  })
});

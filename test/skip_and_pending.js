
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();


describe('foo', function() {
  it('foo', function() {
    this.skip();
  });
});

describe('bar', function() {
  it('bar');
});

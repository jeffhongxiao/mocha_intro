
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();

var timeout_in_ms = 1500;

describe('foo', function() {
  it('foo', function(done) {
    setTimeout(done, timeout_in_ms);
  });
});

// suite level
describe('bar', function() {
  this.timeout(500);

  describe('bar1', function() {
    it('bar1', function(done) {
      setTimeout(done, timeout_in_ms);
    })
  });

  describe('bar2', function() {
    it('bar2', function(done) {
      setTimeout(done, timeout_in_ms);
    })
  });
});

// test level
describe('baz', function() {
  describe('baz1', function() {
    it('baz1', function(done) {
      this.timeout(5000);
      setTimeout(done, timeout_in_ms);
    });
  });

  describe('baz2', function() {
    it('baz2', function(done) {
      this.timeout(100);
      setTimeout(done, timeout_in_ms);
    });
  });
});

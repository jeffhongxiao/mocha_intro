
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();

describe('suite', function() {
  describe('test', function() {
    it('should return 2 + 2 is 4', function(done) {
      var result = 2 + 2;
      // https://stackoverflow.com/questions/23597475/chai-unittesting-expect42-to-be-aninteger
      result.should.be.a('number');
      result.should.equal(4);

      done();
    });

    it('should return true is true', function(done) {
      // intended to fail
      true.should.equal(false);
      done();
    });
  });
});

describe('another suite', function() {
  it('synchronous tests - no callback', function() {
    true.should.equal(true);
  });
});

describe('yet another suite', function() {
  it('asynchronous tests - calls with done', function(done) {
    true.should.equal(true);
    done();
  });
});

describe('suite with single test', function() {
  it('should be a pending test');
});

describe('suite with multiple tests', function() {
  describe('a test', function() {
    it('should be another pending test');
  });
});

// NOT picked up as a test
describe('bar', function() {
  // ...
});

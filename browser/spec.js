// var chai = require('chai');
var should = chai.should();

describe('suite', function() {
  describe('test', function() {
    it('should return 2 + 2 is 4', function(done) {
      var result = 2 + 2;
      // result.should.equal(4);
      assert(result === 4);

      done();
    });

    it('should return true is true', function(done) {
      assert(true === true);
      true.should.equal(true);
      done();
    });
  });
});

describe('another suite', function() {
  it('synchronous tests - no callback', function() {
    assert(true === true);
  });
});

describe('yet another suite', function() {
  it('asynchronous tests - calls with done', function(done) {
    assert(true === true);
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

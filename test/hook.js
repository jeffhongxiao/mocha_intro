
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();

// global
before(function() {
  console.log('BEFORE every test in every file');
});

describe('test suite is declared in "describe"', function() {
  it('test is declared in "it"', function() {
    true.should.equal(true);
  });

  it('"test case" is the same thing as "test"', function() {
    true.should.equal(true);
  })
});

describe('a test suite', function() {
  describe('another test suite inside', function() {
    describe('yet another test suite', function() {
      describe('we can nest as many test suites as we want', function() {
        it('a test', function() {
          true.should.equal(true);
        });
      })
    });
  });
});

// global
after(function() {
  console.log('AFTER every test in every file');
})
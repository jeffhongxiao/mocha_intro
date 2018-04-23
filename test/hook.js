
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();

beforeEach(function() {
  console.log('BEFORE every test in every file');
})

describe('suite', function() {
  it('test1', function() {
    true.should.equal(true);
  });

  it('test2', function() {
    false.should.equal(false);
  });
});

afterEach(function() {
  console.log('AFTER every test in every file');
})

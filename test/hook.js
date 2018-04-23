
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();

// global
before(function() {
  console.log('BEFORE every test in every file');
});

describe('suite', function() {
  // suite level
  before(function() {
    console.log('BEFORE test in current suite');
  });

  it('test1', function() {
    true.should.equal(true);
  });

  it('test2', function() {
    false.should.equal(false);
  });

  // suite level
  after(function() {
    console.log('AFTER test in current suite');
  });
});

describe('another suite', function() {
  // test level
  beforeEach('beforeEach', function() {
    console.log('BEFORE each test');
  });

  it('test', function() {
    true.should.equal(true);
  });

  it('another test', function() {
    true.should.equal(true);
  });

  // test level
  afterEach(function afterEach() {
    console.log('AFTER each test');
  });
});

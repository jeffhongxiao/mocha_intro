
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();

// global
before(function() {
  console.log('BEFORE every test in every file');
});

describe('suite', function() {
  // suite level? or testcase level?
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
  describe('testcase', function() {
    // testcase level
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
});

describe('yet another suite', function() {
  // suite level
  before(function() {
    console.log('a before() in parent describe()');
  });

  describe('testcase', function() {
    it('test', function() {
      true.should.equal(true);
    });

    it('another test', function() {
      true.should.equal(true);
    });
  });

  describe('another testcase', function() {
    it('yet another test', function() {
      true.should.equal(true);
    });
  });
});

describe('complicated suite', function() {
  // suite level
  before('suite level before()', function() {
    console.log('suite level before()');
  });

  describe('testcase A', function() {
    // testcase level
    before('testcase level before()', function() {
      console.log('testcase level before()');
    });

    it('test A1', function() {
      true.should.equal(true);
    });

    it('test A2', function() {
      true.should.equal(true);
    });

  });

  describe('testcase B', function() {
    it('test B1', function() {
      true.should.equal(true);
    });

    it('test A2', function() {
      true.should.equal(true);
    });

    // testcase level
    afterEach('testcase level afterEach()', function() {
      console.log('testcase level afterEach()');
    });
  });
});

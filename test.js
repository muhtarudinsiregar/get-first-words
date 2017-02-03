const assert = require('assert');
const getFirstWords = require('./index.js');

describe('description', function() {
  it("should return 'FIRST'", function() {
    assert.equal('FIRST', getFirstWords("First Words Test"));
  });
});

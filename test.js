const assert = require('assert')
const gfw = require('./index.js')

describe('test output', function () {
  it("should return 'First'", function () {
    assert.equal('First', gfw('First Words Test'))
  })

  it("should return 'false' if param null", function () {
    assert.equal(false, gfw())
  })
})

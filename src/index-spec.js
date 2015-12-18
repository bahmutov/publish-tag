const la = require('lazy-ass')
const is = require('check-more-types')
const publishTag = require('./index')

/* global describe, it */
describe('publishTag', () => {
  it('is a function', () => {
    la(is.fn(publishTag))
  })

  it('searches through commits', () => {
    const isTest = true
    return publishTag(isTest)
  })
})

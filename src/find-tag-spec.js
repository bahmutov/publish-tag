const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('find-tag', () => {
  const find = require('./find-tag')

  it('is a function', () => {
    la(is.fn(find))
  })

  it('finds lowercase tag', () => {
    const s = 'foo bar\n\nsomething\ntag: next'
    const tag = find(s)
    la(tag === 'next', tag)
  })

  it('finds uppercase tag', () => {
    const s = 'foo bar\n\nsomething\ntag: HUGE'
    const tag = find(s)
    la(tag === 'HUGE', tag)
  })

  it('finds lowercase tag with dashes', () => {
    const s = 'foo bar\n\nsomething\ntag: beta-beta'
    const tag = find(s)
    la(tag === 'beta-beta', tag)
  })

  it('finds tag with spaces', () => {
    const s = 'foo bar\n\nsomething\n  tag: next    \n'
    const tag = find(s)
    la(tag === 'next', tag)
  })

  it('finds tag in the middle', () => {
    const s = 'foo bar\n\nsomething\ntag: next\nlast line\n'
    const tag = find(s)
    la(tag === 'next', tag)
  })
})

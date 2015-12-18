const la = require('lazy-ass')
const is = require('check-more-types')
const Promise = require('bluebird')
const npmUtils = require('npm-utils')
const findTag = require('find-tag-in-git-log')

la(is.fn(findTag), 'expected find tag function', findTag)

function publish (isTest, tag) {
  return new Promise(function (resolve, reject) {
    if (is.unemptyString(tag)) {
      console.log('publishing under tag "%s"', tag)
    } else {
      console.log('publishing under default tag')
    }

    if (isTest) {
      console.log('this is just a test, stop')
      return resolve()
    }

    const options = is.unemptyString(tag) ? { tag: tag } : undefined
    return npmUtils.publish(options)
  })
}

function publishTag (isTest) {
  // how many commits to consider?
  const n = 5
  return findTag(n)
    .then(tag => publish(isTest, tag))
}

module.exports = publishTag

if (!module.parent) {
  !(function examplePublish () {
    publishTag(true)
      .done()
  }()) // eslint-disable-line
}


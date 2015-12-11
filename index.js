const ggit = require('ggit')
const findTag = require('./src/find-tag')
const la = require('lazy-ass')
const is = require('check-more-types')
const Promise = require('bluebird')

const commitSchema = {
  message: is.unemptyString,
  body: is.maybe.string
}
const isCommit = is.schema.bind(null, commitSchema)

function printCommits (l) {
  console.log('printing %d commit(s)', l.length)
  console.log(l)
}

function findTagInCommits (l) {
  var tag
  l.some(commit => {
    la(isCommit(commit), 'invalid commit', commit)

    const fullMessage = commit.message + '\n' + commit.body
    const foundTag = findTag(fullMessage)
    if (foundTag) {
      tag = foundTag
      return true
    }
  })
  return tag
}

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

    return reject(new Error('not implemented'))
  })
}

function publishCommits (commits, isTest) {
  la(is.array(commits), 'expected list of commits', commits)
  printCommits(commits)
  const tag = findTagInCommits(commits)
  return publish(isTest, tag)
}

function publishTag (isTest) {
  return ggit.commits.all(process.cwd())
    .then(commits => commits.slice(0, 1))
    .then(commits => publishCommits(commits, isTest))
}

module.exports = publishTag

if (!module.parent) {
  !(function examplePublish () {
    publishTag(true)
      .done()
  }()) // eslint-disable-line

  !(function examplePublishCommit () { // eslint-disable-line
    const commits = [{
      message: 'chore(test): just a test\n\nbody of the message\nTAG: my-test\n'
    }]
    publishCommits(commits, true)
      .done()
  }())
}


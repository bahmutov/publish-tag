const ggit = require('ggit')
const findTag = require('./src/find-tag')

function printCommits (l) {
  console.log('printing %d commit(s)', l.length)
  console.log(l)
}

function findTagInCommits (l) {
  var tag
  l.some(commit => {
    const foundTag = findTag(commit.message)
    if (foundTag) {
      tag = foundTag
      return true
    }
  })
  return tag
}

function publish (tag) {
  console.log('publishing under tag', tag)
}

function publishTag () {
  return ggit.commits.all(process.cwd())
    .then(commits => commits.slice(0, 1))
    .then(commits => {
      printCommits(commits)
      return commits
    })
    .then(findTagInCommits)
    .then(publish)
}

if (!module.parent) {
  (function examplePublish () {
    publishTag()
      .done()
  }())
}


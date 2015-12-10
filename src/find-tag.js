const la = require('lazy-ass')
const is = require('check-more-types')

function findTag (message) {
  la(is.string(message), 'missing message', message)

  const regexp = /TAG:\s?([a-z\-_]+)\s*(\n|$)/i
  const match = regexp.exec(message)
  if (match) {
    return match[1]
  }
}

module.exports = findTag

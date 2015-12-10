#!/usr/bin/env node --harmony

'use strict'

const help = [
  'USE: publish-tag'
].join('\n')

require('simple-bin-help')({
  minArguments: 2,
  packagePath: __dirname + '/../package.json',
  help: help
})

const publishTag = require('..')
publishTag()
  .done()

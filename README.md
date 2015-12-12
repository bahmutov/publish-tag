# publish-tag

> NPM publish command with specific tag extracted from the last commit messages

[![NPM][publish-tag-icon] ][publish-tag-url]

[![Build status][publish-tag-ci-image] ][publish-tag-ci-url]
[![dependencies][publish-tag-dependencies-image] ][publish-tag-dependencies-url]
[![devdependencies][publish-tag-devdependencies-image] ][publish-tag-devdependencies-url]

[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)
[![standard style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install and use

Install this package as a dev dependency

    npm install --save-dev publish-tag

Then when using [semantic-release](https://github.com/semantic-release/semantic-release) instead of just
commits and publishing, add to the commit body text `TAG: <tag>` text. The `<tag>` could be any word: 'alpha',
'next', 'future'.

The instead of the standard semantic release command

    "semantic-release": "semantic-release pre && npm publish && semantic-release post"

use `publish-tag` command instead of `npm publish`

    "semantic-release": "semantic-release pre && publish-tag && semantic-release post"

This script will examine commit log, and will run `npm publish --tag <tag>` if it finds
`TAG: <tag>` text. Or if the tag is not found it will run the plain `npm publish` command.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue][issues] on Github

[issues]: https://github.com/bahmutov/publish-tag/issues

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[publish-tag-icon]: https://nodei.co/npm/publish-tag.png?downloads=true
[publish-tag-url]: https://npmjs.org/package/publish-tag
[publish-tag-ci-image]: https://travis-ci.org/bahmutov/publish-tag.png?branch=master
[publish-tag-ci-url]: https://travis-ci.org/bahmutov/publish-tag
[publish-tag-dependencies-image]: https://david-dm.org/bahmutov/publish-tag.png
[publish-tag-dependencies-url]: https://david-dm.org/bahmutov/publish-tag
[publish-tag-devdependencies-image]: https://david-dm.org/bahmutov/publish-tag/dev-status.png
[publish-tag-devdependencies-url]: https://david-dm.org/bahmutov/publish-tag#info=devDependencies
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

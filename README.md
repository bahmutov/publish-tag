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

Once your package has been published with `--tag something`

- regular users can still install the previous version using `npm i <package name>`
- alpha users can install the tagged version using `npm i <package name>@something`

You can publish more versions under the same tag.
When you are ready to switch, use this command to mark

    npm dist-tag add <package>@<good version> latest

For explanation and inspiration for this tool, see [One simple trick][1]

[1]: https://medium.com/greenkeeper-blog/one-simple-trick-for-javascript-package-maintainers-to-avoid-breaking-their-user-s-software-and-to-6edf06dc5617#.37rk01hzs

### Note

If your CI has problems executing the `publish-tag` script directly due to `--harmony` argument,
you can use explicit command

    "semantic-release": "semantic-release pre && node --harmony bin/publish-tag.js && semantic-release post"

## Good commit messages

Semantic release works best when your commit messages are simple to parse. I recommend using
conventional commit convention implemented in tools like [pre-git](https://github.com/bahmutov/pre-git) and
[commitizen](https://commitizen.github.io/cz-cli/). Here are examples of git commit messages that
are simple to parse

    feat(cli): added cli script
    fix(doc): fixed typos in the README

The easiest way to enforce this format is to install [pre-git@3.x.x](https://github.com/bahmutov/pre-git)
and use `npm run commit` script that guides your through the message parts. It will ask you at the
end what tag this version should be released (if semantic release determines that it should be released).
Here is an example wizard terminal output

    ? Select the type of change that you're committing: fix: A bug fix
    ? Denote the scope of this change (db, api, cli, etc.): docs
    ? Write a short, imperative tense description of the change:
     Described commitizen and conventional commit message format
    ? Provide a longer description of the change:
    ? List issues this commit resolves (fixes #2, closes #14):
    ? Is this a major breaking change: No
    ? Should this be published under different tag?
      This will let users still install the current latest,
      but eary adapters can `npm install <name>@<tag>`
     (latest): example

Once you answer the last question, the full commit message is formed and the code is committed,
making it simple for `publish-tag` to parse. For example the above answers will make the following message

```
fix(docs): Described commitizen and conventional commit message format


TAG: example
```

The semantic release will publish it under the distribution tag "example".

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

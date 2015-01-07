thoughtpad-plugin-redirection
=============================

[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

A thoughtpad plugin that creates automatic redirection pages for obsolete links

## Usage

The plugin should be loaded using the [thoughtpad-plugin-manager](https://github.com/hmmdeif/thoughtpad-plugin-manager). Once this has been done then the plugin will respond to events. To use standalone:

```JavaScript
var man = require('thoughtpad-plugin-manager'),
    tags = require('thoughtpad-plugin-redirection');

yield thoughtpad.notify("html-precompile-all-request");
```

The plugin will emit a `html-compile-all-request` if additional languages are found in the config.

## Config File Setup

The redirection pages will be compiled depending on their configuration:

```JavaScript
redirections: {
    '/somepage/somewhere/': '/anotherpage/somewhere/else/'
}
```

## Tests

Ensure you have globally installed mocha - `npm -g install mocha`. Then you can run:

`mocha --harmony-generators`

Alternatively if you are in a *NIX environment `npm test` will run the tests plus coverage data.

## License

The code is available under the [MIT license](http://deif.mit-license.org/).

[travis-image]: https://img.shields.io/travis/hmmdeif/thoughtpad-plugin-redirection/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/hmmdeif/thoughtpad-plugin-redirection
[coveralls-image]: https://img.shields.io/coveralls/hmmdeif/thoughtpad-plugin-redirection/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/hmmdeif/thoughtpad-plugin-redirection?branch=master
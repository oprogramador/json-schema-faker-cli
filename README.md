# json-schema-faker-cli

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/oprogramador/json-schema-faker-cli.svg?branch=master)](https://travis-ci.com/oprogramador/json-schema-faker-cli)

[![NPM status](https://nodei.co/npm/json-schema-faker-cli.png?downloads=true&stars=true)](https://npmjs.org/package/json-schema-faker-cli)

This is a CLI for [json-schema-faker](https://www.npmjs.com/package/json-schema-faker).

## install

`npm install -g json-schema-faker-cli`

## usage

### params
- (required) file (path) containing JSON schema
- (optional) generated file (path) according to the provided schema
- (optional) number of objects in the array (when you want to generate an array of multiple objects matching the schema)
- (optional) file (path) containing options (in JS or JSON format)

### generating single object from the schema
`generate-json schema.json output.json`

### generating array of multiple objects
`generate-json schema.json output.json $ITEMS_LENGTH`

### generating with options set
`generate-json schema.json output.json none options.js`

You can use any of the [json-schema-faker available options](https://github.com/json-schema-faker/json-schema-faker/tree/master/docs#available-options).

an example options file:
```js
module.exports = {
  minLength: 20,
  random: () => 0.2,
};
```

### generating to stdout
`generate-json schema.json`

### skipping a param
You can pass `none` to skip any of the optional params. It's useful when you need to pass a following param when skipping some of the previous params at the same time.

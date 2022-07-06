# json-schema-faker-cli

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/oprogramador/json-schema-faker-cli.svg?branch=master)](https://travis-ci.com/oprogramador/json-schema-faker-cli)

[![NPM status](https://nodei.co/npm/json-schema-faker-cli.png?downloads=true&stars=true)](https://npmjs.org/package/json-schema-faker-cli)

It is a CLI for [json-schema-faker](https://www.npmjs.com/package/json-schema-faker).

## install

`npm install -g json-schema-faker-cli`

## usage

### params
- file (path) containing JSON schema
- generated file (path) according to the provided schema
- number of objects in the array
- file (path) containing options (in JS or JSON format)

### generating single object from the schema
`generate-json schema.json output.json`

### generating array of multiple objects
`generate-json schema.json output.json $ITEMS_LENGTH`

### generating with options set
`generate-json schema.json output.json none options.js`

You can use any of the [json-schema-faker available options](https://github.com/json-schema-faker/json-schema-faker/tree/master/docs#available-options).

an example `options.js`:
```js
module.exports = {
  minLength: 20,
  random: () => 0.2,
};
```

### generating to stdout
`generate-json schema.json`

### skipping a param
You can pass `none` to skip any of the optional params.

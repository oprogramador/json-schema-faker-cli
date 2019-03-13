# json-schema-faker-cli

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oprogramador/json-schema-faker-cli.svg?branch=master)](https://travis-ci.org/oprogramador/json-schema-faker-cli)

[![NPM status](https://nodei.co/npm/json-schema-faker-cli.png?downloads=true&stars=true)](https://npmjs.org/package/json-schema-faker-cli)

It is a CLI for [json-schema-faker](https://www.npmjs.com/package/json-schema-faker).

## install

`npm install -g json-schema-faker-cli`

## usage

### generating single object from the schema
`generate-json schema.json output.json`

- `schema.json` - file containing JSON schema
- `output.json` - generated file according to the provided schema

### generating array of multiple objects
`generate-json schema.json output.json $ITEMS_LENGTH`

- `ITEMS_LENGTH` - number of objects in the array

# json-schema-faker-cli

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

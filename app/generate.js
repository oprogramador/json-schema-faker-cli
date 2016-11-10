const _ = require('lodash');
const jsonfile = require('jsonfile');
const faker = require('json-schema-faker');

function generate(inputPath, outputPath, itemsLength) {
  const inputObject = jsonfile.readFileSync(inputPath);
  const output = itemsLength === undefined
    ? faker(inputObject)
    : _.times(itemsLength, () => faker(inputObject));
  jsonfile.writeFileSync(outputPath, output);
}

module.exports = generate;

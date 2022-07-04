const _ = require('lodash');
const jsonfile = require('jsonfile');
const faker = require('json-schema-faker');

function generate(inputPath, outputPath = 'none', itemsLength = 'none', optionsPath = 'none') {
  const inputObject = jsonfile.readFileSync(inputPath);
  if (optionsPath !== 'none') {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const options = require(optionsPath);
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(options)) {
      faker.option(key, value);
    }
  }
  const output = itemsLength === 'none'
    ? faker.generate(inputObject)
    : _.times(itemsLength, () => faker.generate(inputObject));
  jsonfile.writeFileSync(outputPath, output);
}

module.exports = generate;

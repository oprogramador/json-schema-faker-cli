const jsonfile = require('jsonfile');
const faker = require('json-schema-faker');

function generate(inputPath, outputPath) {
  const inputObject = jsonfile.readFileSync(inputPath);
  const outputObject = faker(inputObject);
  jsonfile.writeFileSync(outputPath, outputObject);
}

module.exports = generate;

const faker = require('json-schema-faker');
const generate = require('../../generate');
const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');
const { expect } = require('chai');

const outputPath = path.resolve(__dirname, '../data/example.json');

describe('generate', () => {
  beforeEach('reset faker options', () => {
    faker.reset();
  });

  beforeEach('remove output file', () => {
    try {
      fs.unlink(outputPath, () => {});
    } catch (error) {
      if (!/no such file or directory/.test(error.message)) {
        throw error;
      }
    }
  });

  it('generates JSON', () => {
    generate(path.resolve(__dirname, '../data/schema.json'), outputPath);
    const outputObject = jsonfile.readFileSync(outputPath);

    expect(outputObject).to.be.an('object');
  });

  it('generates all required fields', () => {
    generate(path.resolve(__dirname, '../data/schema.json'), outputPath);
    const outputObject = jsonfile.readFileSync(outputPath);

    expect(outputObject).to.have.all.keys('key1', 'key2');
  });

  it('generates multiple rows when itemsLength is specified', () => {
    const itemsLength = 20;
    generate(path.resolve(__dirname, '../data/schema.json'), outputPath, itemsLength);
    const outputArray = jsonfile.readFileSync(outputPath);

    expect(outputArray).to.be.an('array');
    expect(outputArray).to.have.length(itemsLength);
    outputArray.map(object => expect(object).to.have.all.keys('key1', 'key2'));
  });

  it('works with options', () => {
    generate(path.resolve(__dirname, '../data/schema.json'), outputPath, undefined, './tests/data/options');
    const outputObject = jsonfile.readFileSync(outputPath);

    expect(outputObject).to.deep.equal({
      key1: 'Ut velitUt velitUt velit',
      key2: 'Ut velitUt velitUt velit',
    });
  });
});

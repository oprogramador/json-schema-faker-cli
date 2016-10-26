const fs = require('fs');
const path = require('path');
const jsonfile = require('jsonfile');
const expect = require('chai').expect;
const execSync = require('child_process').execSync;

const outputPath = path.resolve(__dirname, '../data/example.json');

describe('cmd', () => {
  beforeEach('remove output file', () => {
    try {
      fs.unlink(outputPath);
    } catch (error) {
      if (!/no such file or directory/.test(error.message)) {
        throw error;
      }
    }
  });

  it('generates JSON', () => {
    execSync(`${path.resolve(__dirname, '../../../cmd.js')} ${path.resolve(__dirname, '../data/schema.json')} ${outputPath}`);
    const outputObject = jsonfile.readFileSync(outputPath);

    expect(outputObject).to.be.an('object');
  });

  it('generates all required fields', () => {
    execSync(`${path.resolve(__dirname, '../../../cmd.js')} ${path.resolve(__dirname, '../data/schema.json')} ${outputPath}`);
    const outputObject = jsonfile.readFileSync(outputPath);

    expect(outputObject).to.have.all.keys('key1', 'key2');
  });
});

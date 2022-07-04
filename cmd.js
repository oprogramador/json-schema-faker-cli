#!/usr/bin/env node
const generate = require('./app/generate');

generate(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);

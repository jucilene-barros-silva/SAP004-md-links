#!/usr/bin/env node

const mdLinks = require('./validationArchive');

const [, , ...args] = process.argv

const options = {
  validate: false
};

if (args.includes('--validate')) {
  options.validate = true;
}

const linksF = mdLinks(args[0], options)
linksF.then(results => console.log(results))
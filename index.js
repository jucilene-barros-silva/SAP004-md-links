const fs = require('fs');
// const readDir = require('./src/readDir.js');
const readFile = require('./src/readFile.js');
const validationArchive = require('./src/validationArchive.js');

const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        err = 'Nenhum link foi encontrado ou a requisição não foi completada!'
        reject(err)
      } else if (stats.isFile()) {
        readFile(path).then((linksFormated) => {
          validationArchive(option, linksFormated).then((content) => {
            return resolve(content);
          })
        }).catch((err) => {
          err = 'Nenhum link foi encontrado ou a requisição não foi completada!'
          reject(err)
        })
      }
    });
  });
};

module.exports = mdLinks;

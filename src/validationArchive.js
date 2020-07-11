const validation = require('./validation.js');
console.log("oi")
const validationArchive = (option, links) => {
  console.log(option)
  console.log(links)
  return new Promise((resolve) => {
    if (option === '--validate') {
      const promises= links.map((link) => {
        return (validation(link));
      })
      return Promise.all(promises).then(()=>resolve(links))
    }
    return resolve(links);
  })
}
validationArchive('--validate', [{href:'https://www.google.com',text:'google'}]);
validation({href:'https://www.google.com'}).then(resposta=> console.log(resposta))
module.exports = validationArchive ;
const validation = require('./validation.js');
const validationArchive = (option, links) => {
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
module.exports = validationArchive ;
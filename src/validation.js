const feth= require('node-fetch');

const validation= (path) => {
    return feth(path.href).then((r) => {
        const urls = r.url,
        statusMsg = r.statusText,
        status = r.status,
        result =`${urls} -> ${statusMsg} -> ${status}`;
        path.status= `${statusMsg} -> ${status}`
    })
    .catch((err) => reject(err));
};

module.exports = validation;
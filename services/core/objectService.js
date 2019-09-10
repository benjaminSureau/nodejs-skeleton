const Object = require('../../models/core/object');

function randomFunction(params) {
    return (new Promise((resolve, reject) => {
        if(params.test == 'yes') {
            resolve({status: "OK", object: {id: 1}});
        }
        reject({status: "KO"});
    }));
}

module.exports = {
    randomFunction
};

const Object = require('../../models/core/object');
const objectService = require('../../services/core/objectService');


function create(req, res) {

}

function getAll(req, res) {

}

function updateAll(req, res) {

}

function deleteAll(req, res) {

}

function getById(req, res) {

}

function updateById(req, res) {

}

function deleteById(req, res) {

}

/**
 *
 * @param req contain params, query and body
 * @param res
 * @returns {Promise<void>}
 */
async function randomFunction(req, res) {
    let result = await objectService.randomFunction(req.params);
    if (result.status == 'OK') {
        result.json(result.object);
    } else {
        errorLogger('Non valid blabla ' + req.params.objectId);
        result.sendStatus(400);
    }
}


module.exports = {
    create,
    getAll,
    updateAll,
    deleteAll,
    getById,
    updateById,
    deleteById
};

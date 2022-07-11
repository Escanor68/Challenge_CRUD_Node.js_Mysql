const empresaModel = 'empresa/';

const { app: create } = require('./src/create');
const { app: eliminar } = require('./src/delete');
const { app: update } = require('./src/update');
const { app: get } = require('./src/get');
const { app: getById } = require('./src/getById');

module.exports = define => {
	define(empresaModel + 'create', create);
	define(empresaModel + 'eliminar', eliminar);
	define(empresaModel + 'update', update);
	define(empresaModel + 'get', get);
	define(empresaModel + 'getById', getById);
};

const usuarioModel = 'usuario/';

const { app: create } = require('./src/create');
const { app: eliminar } = require('./src/delete');
const { app: update } = require('./src/update');
const { app: get } = require('./src/get');
const { app: getById } = require('./src/getById');

module.exports = define => {
	define(usuarioModel + 'create', create);
	define(usuarioModel + 'eliminar', eliminar);
	define(usuarioModel + 'update', update);
	define(usuarioModel + 'get', get);
	define(usuarioModel + 'getById', getById);
};

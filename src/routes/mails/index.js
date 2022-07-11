const usuarioModel = 'usuario/';

const { app: sendMail } = require('./src/sendmail');
const { app: eliminar } = require('./src/delete');
const { app: history } = require('./src/history');
const { app: getById } = require('./src/getById');

module.exports = define => {
	define(usuarioModel + 'sendMail', sendMail);
	define(usuarioModel + 'eliminar', eliminar);
	define(usuarioModel + 'history', history);
	define(usuarioModel + 'getById', getById);
};

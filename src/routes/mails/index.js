const mailModel = 'mail/';

const { app: sendMail } = require('./src/sendmail');
const { app: eliminar } = require('./src/delete');
const { app: history } = require('./src/history');
const { app: getById } = require('./src/getById');

module.exports = define => {
	define(mailModel + 'sendMail', sendMail);
	define(mailModel + 'eliminar', eliminar);
	define(mailModel + 'history', history);
	define(mailModel + 'getById', getById);
};

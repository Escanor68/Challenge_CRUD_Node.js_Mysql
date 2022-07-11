let app = null;
const empresa = require('./empresa');
const usuario = require('./usuario');
const mail = require('./mails');

const defineRoute = (ruta, requests) => {
	const baseRequest = '/api/';
	const route = baseRequest + ruta;
	app.use(route, requests);
};

module.exports = aplication => {
	app = aplication;
	empresa(defineRoute);
	usuario(defineRoute);
	mail(defineRoute);
};

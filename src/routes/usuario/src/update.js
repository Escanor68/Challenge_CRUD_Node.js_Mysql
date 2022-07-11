const express = require('express');
const UsuarioModel = require('../../../models/Usuario');
const schemaUpdate = require('../../../structures/usuario/update');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaUpdate(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {

		const { id, name, email } = req.body;
		await UsuarioModel.prototype.actualizar(id, name, email, 'usuario');

		res.status(200).json({ message: 'Se actualizo el usuario correctamente' });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}

};

app.post('/', handler);
module.exports = { app, handler };

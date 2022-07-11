const express = require('express');
const UsuarioModel = require('../../../models/Usuario');
const schemaCreate = require('../../../structures/usuario/delete');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaCreate(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {
		const { id } = req.body;

		await UsuarioModel.prototype.eliminar(id, 'usuario');

		res.status(200).json({ message: 'Se eliminio el usuario correctamente' });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}
};

app.get('/', handler);
module.exports = { app, handler };

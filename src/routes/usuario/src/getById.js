const express = require('express');
const UsuarioModel = require('../../../models/Usuario');
const schemaGet = require('../../../structures/usuario/getById');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaGet(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {
		const { id } = req.body;

		const usuario = await UsuarioModel.prototype.obtenerPorId(id, 'usuario');

		res.status(200).json({ usuario });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}
};

app.get('/', handler);
module.exports = { app, handler };

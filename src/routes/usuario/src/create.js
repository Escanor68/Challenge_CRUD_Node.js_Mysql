const express = require('express');
const UsuarioModel = require('../../../models/Usuario');
const schemaCreate = require('../../../structures/usuario/create');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaCreate(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {

		const { name, email } = req.body;

		const usuario = new UsuarioModel({ name, email });

		await usuario.insertar(name, email, 'usuario');

		res.status(200).json({ message: 'Se inserto-creo el usuario correctamente' });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}

};

app.post('/', handler);
module.exports = { app, handler };

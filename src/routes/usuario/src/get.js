const express = require('express');
const UsuarioModel = require('../../../models/Usuario');

const app = express.Router();

const handler = async (req, res) => {
	try {
		const usuario = await UsuarioModel.prototype.obtener('usuario');

		res.status(200).json({ Usuarios: usuario });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}
};

app.get('/', handler);
module.exports = { app, handler };

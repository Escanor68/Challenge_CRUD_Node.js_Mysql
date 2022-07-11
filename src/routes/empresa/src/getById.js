const express = require('express');
const EmpresaModel = require('../../../models/Empresa');
const schemaGet = require('../../../structures/empresa/getById');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaGet(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {
		const { id } = req.body;

		const empresa = await EmpresaModel.prototype.obtenerPorId(id, 'empresa');

		res.status(200).json({ empresa });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}
};

app.get('/', handler);
module.exports = { app, handler };

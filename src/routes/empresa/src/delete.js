const express = require('express');
const EmpresaModel = require('../../../models/Empresa');
const schemaCreate = require('../../../structures/empresa/delete');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaCreate(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {
		const { id } = req.body;

		await EmpresaModel.prototype.eliminar(id, 'empresa');

		res.status(200).json({ message: 'Se eliminio la empresa correctamente' });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}
};

app.get('/', handler);
module.exports = { app, handler };

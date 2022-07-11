const express = require('express');
const EmpresaModel = require('../../../models/Empresa');
const schemaUpdate = require('../../../structures/empresa/update');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaUpdate(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {

		const { id, name, email } = req.body;

		await EmpresaModel.prototype.actualizar(id, name, email, 'empresa');

		res.status(200).json({ message: 'Se actualizo la empresa correctamente' });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}

};

app.post('/', handler);
module.exports = { app, handler };

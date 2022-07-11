const express = require('express');
const EmpresaModel = require('../../../models/Empresa');
const schemaCreate = require('../../../structures/empresa/create');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaCreate(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {

		const { name, email } = req.body;

		const empresa = new EmpresaModel({ name, email });

		await empresa.insertar(name, email, 'empresa');

		res.status(200).json({ message: 'Se inserto-creo la empresa correctamente' });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}

};

app.post('/', handler);
module.exports = { app, handler };

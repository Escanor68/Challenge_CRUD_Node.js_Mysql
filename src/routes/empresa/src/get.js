const express = require('express');
const EmpresaModel = require('../../../models/Empresa');

const app = express.Router();

const handler = async (req, res) => {
	try {
		const empresa = await EmpresaModel.prototype.obtener('empresa');

		res.status(200).json({ Empresas: empresa });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}
};

app.get('/', handler);
module.exports = { app, handler };

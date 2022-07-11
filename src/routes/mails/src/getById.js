const express = require('express');
const MailModel = require('../../../models/Mail');
const schemaGet = require('../../../structures/mail/getById');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaGet(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {
		const { id } = req.body;

		const mail = await MailModel.prototype.obtenerPorIdMail(id);

		res.status(200).json({ mail });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}
};

app.get('/', handler);
module.exports = { app, handler };

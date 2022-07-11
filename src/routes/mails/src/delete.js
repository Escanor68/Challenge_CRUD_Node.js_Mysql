const express = require('express');
const MailModel = require('../../../models/Mail');
const schemaCreate = require('../../../structures/mail/delete');

const app = express.Router();

const handler = async (req, res) => {
	const validation = await schemaCreate(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {
		const { id } = req.body;

		await MailModel.prototype.eliminarMail(id);

		res.status(200).json({ message: 'Se eliminio el mail correctamente' });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}
};

app.get('/', handler);
module.exports = { app, handler };

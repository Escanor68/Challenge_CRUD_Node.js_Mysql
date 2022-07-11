const express = require('express');
const MailModel = require('../../../models/Mail');

const app = express.Router();

const handler = async (req, res) => {
	try {
		const mails = await MailModel.prototype.obtenerMail();

		res.status(200).json({ Mail: mails });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}

};

app.get('/', handler);
module.exports = { app, handler };

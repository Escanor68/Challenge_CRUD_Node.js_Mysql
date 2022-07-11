const express = require('express');
const ClassModel = require('../../../../modules/class/Models');

const app = express.Router();

const handler = async (req, res) => {
	try {
		const mails = await ClassModel.prototype.obtener('mail');

		res.status(200).json({ Mail: mails });
	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}

};

app.get('/', handler);
module.exports = { app, handler };

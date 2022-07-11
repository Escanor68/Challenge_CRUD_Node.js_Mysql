const express = require('express');
const schemaCreate = require('../../../structures/mail/sendMail');
const SendEmail = require('../../../../modules/email/sendMail');
const MailModel = require('../../../models/Mail');

const app = express.Router();

const handler = async (req, res) => {

	const validation = await schemaCreate(req.body);
	if(validation.error)
		return res.status(400).json(validation);

	try {
		const { idParas, tabla, contenido } = req.body;

		/* contenido[0] = subject, contenido[1] = texto, contenido[2] = pdfname
		seria la estructura deseada para el envio de los mails */

		if(contenido[2] != null) {
			idParas.forEach(element => {
				const para = MailModel.prototype.obtenerPorId(element, tabla);
				SendEmail.send(para.email, contenido[0], contenido[1], contenido[2]);
			});
		} else {
			idParas.forEach(element => {
				const para = MailModel.prototype.obtenerPorId(element, tabla);
				SendEmail.send(para.email, contenido[0], contenido[1]);
			});
		}

		const usuarioOempresas = [];

		idParas.forEach(element => {
			const para = MailModel.prototype.obtenerPorId(element, tabla);
			usuarioOempresas.push(para);
		});

		const usuariosOempresasJson = JSON.stringify(usuarioOempresas);
		const contenidoJson = JSON.stringify(contenido);
		await MailModel.prototype.insertarMail(usuariosOempresasJson, contenidoJson, 'mail');

		res.status(200).json({ message: `Se enviaron los mails para los ${tabla}s` });

	} catch(error) {
		res.status(500).json({ message: error.toString() });
	}

};

app.post('/', handler);
module.exports = { app, handler };

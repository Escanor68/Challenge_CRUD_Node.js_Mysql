const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
	service: process.env.SERVICE,
	auth: {
		user: process.env.EMAIL_TO_SEND,
		pass: process.env.PASS_OF_EMAIL_TO_SEND
	}
});

class SendEmail {
	static async send(to, subject, texto, pdfname = '') {
		try {
			const params = {
				from: process.env.EMAIL_TO_SEND,
				to,
				subject,
				texto
			};
			if(pdfname !== '') {
				params.attachments = [
					{
						filename: pdfname,
						path: path.join(__dirname, pdfname)
					}
				];
			}
			const envioMail = await transporter.sendMail(params);
			return envioMail;
		} catch(error) {
			return error;
		}
	}
}

module.exports = SendEmail;

const { number, string } = require('joi');
const Joi = require('joi');

const validateSchema = require('../validateSchema');

module.exports = body => {

	const schema = Joi.object({
		idParas: Joi.array(number()).required(),
		tabla: Joi.string().required(),
		contenido: Joi.array(string()).length(3).required()
	});

	return validateSchema(schema, body);
};

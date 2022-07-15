const Joi = require('joi');

const validateSchema = require('../validateSchema');

module.exports = body => {

	const schema = Joi.object({
		idParas: Joi.array().required(),
		tabla: Joi.string().required(),
		contenido: Joi.array().required()
	});

	return validateSchema(schema, body);
};

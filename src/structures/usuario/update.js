const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const validateSchema = require('../validateSchema');

module.exports = body => {

	const schema = Joi.object({
		email: Joi.string().required(),
		name: Joi.string().required(),
		id: Joi.number().required()
	});

	return validateSchema(schema, body);
};

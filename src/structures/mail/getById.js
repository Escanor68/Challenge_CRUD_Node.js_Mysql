const Joi = require('joi');

const validateSchema = require('../validateSchema');

module.exports = body => {

	const schema = Joi.object({
		id: Joi.number().required()
	});

	return validateSchema(schema, body);
};

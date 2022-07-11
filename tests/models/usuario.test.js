const assert = require('assert');
const UsuarioModel = require('../../src/models/Usuario');

const compareData = (model, data) => {
	assert.deepStrictEqual(model.name, data.name);
	assert.deepStrictEqual(model.email, data.email);
};

describe('Test Empresa Model', () => {

	const data = {
		name: 'Ricardo',
		email: 'ricardo@gmail.com'
	};

	it('Create Empresa Model', async () => {
		const empresaModel = new UsuarioModel(data);
		compareData(empresaModel, data);
	});
});

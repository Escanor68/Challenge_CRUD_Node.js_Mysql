const assert = require('assert');
const EmpresaModel = require('../../src/models/Empresa');

const compareData = (model, data) => {
	assert.deepStrictEqual(model.name, data.name);
	assert.deepStrictEqual(model.email, data.email);
};

describe('Test Empresa Model', () => {

	const data = {
		name: 'Apple',
		email: 'apple@icloud.com'
	};

	it('Create Empresa Model', async () => {
		const empresaModel = new EmpresaModel(data);
		compareData(empresaModel, data);
	});
});

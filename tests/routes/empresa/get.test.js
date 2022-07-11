const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockRequest, mockResponse } = require('../../mocks');

const { handler } = require('../../../src/routes/empresa/src/get');
const EmpresaModel = require('../../../src/models/Empresa');

describe('Get Empresa api test', () => {
	afterEach(() => sandbox.restore());

	// variables
	const falsoId = {
		Empresas: [
			{
				id: 4,
				name: 'Google',
				email: 'google@gmail.com'
			}
		]
	};

	context('When no error occurs', () => {
		it('Should 200 if successfully get', async () => {
			sandbox.stub(EmpresaModel.prototype, 'obtener').resolves(falsoId);

			const req = mockRequest();
			const res = mockResponse();

			await handler(req, res);
			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json.Empresas, {
				Empresas: [
					{
						email: 'google@gmail.com',
						id: 4,
						name: 'Google'
					}
				]
			});

			sandbox.assert.calledOnceWithExactly(EmpresaModel.prototype.obtener, 'empresa');
		});
	});

	context('When error occurs', () => {
		context('When error in program', () => {
			it('Should return 500 if method insert fails', async () => {
				sandbox.stub(EmpresaModel.prototype, 'obtener').rejects(new Error('Error in Get'));

				const req = mockRequest();
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 500);
				assert.deepStrictEqual(res.json, { message: 'Error: Error in Get' });

				sandbox.assert.calledOnceWithExactly(EmpresaModel.prototype.obtener, 'empresa');
			});
		});

	});
});

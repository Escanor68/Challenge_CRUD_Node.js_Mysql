const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockRequest, mockResponse } = require('../../mocks');

const { handler } = require('../../../src/routes/usuario/src/get');
const UsuarioModel = require('../../../src/models/Usuario');

describe('Get Usuario api test', () => {
	afterEach(() => sandbox.restore());

	// variables
	const falsoId = {
		Usuarios: [
			{
				id: 4,
				name: 'Daniel Grebosz',
				email: 'daniel@gmail.com'
			}
		]
	};

	context('When no error occurs', () => {
		it('Should 200 if successfully get', async () => {
			sandbox.stub(UsuarioModel.prototype, 'obtener').resolves(falsoId);

			const req = mockRequest();
			const res = mockResponse();

			await handler(req, res);
			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json.Usuarios, {
				Usuarios: [
					{
						email: 'daniel@gmail.com',
						id: 4,
						name: 'Daniel Grebosz'
					}
				]
			});

			sandbox.assert.calledOnceWithExactly(UsuarioModel.prototype.obtener, 'usuario');
		});
	});

	context('When error occurs', () => {
		context('When error in program', () => {
			it('Should return 500 if method insert fails', async () => {
				sandbox.stub(UsuarioModel.prototype, 'obtener').rejects(new Error('Error in Get'));

				const req = mockRequest();
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 500);
				assert.deepStrictEqual(res.json, { message: 'Error: Error in Get' });

				sandbox.assert.calledOnceWithExactly(UsuarioModel.prototype.obtener, 'usuario');
			});
		});

	});
});

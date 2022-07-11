const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockRequest, mockResponse } = require('../../mocks');

const { handler } = require('../../../src/routes/usuario/src/delete');
const UsuarioModel = require('../../../src/models/Usuario');

describe('Delete Usuario api test', () => {
	afterEach(() => sandbox.restore());

	// variables
	const body = {
		id: 1
	};

	const falsoId = null;

	context('When no error occurs', () => {
		it('Should 200 if successfully delete', async () => {
			sandbox.stub(UsuarioModel.prototype, 'eliminar').resolves(falsoId);

			const req = mockRequest(body);
			const res = mockResponse();

			await handler(req, res);
			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json, { message: 'Se eliminio el usuario correctamente' });

			sandbox.assert.calledOnceWithExactly(UsuarioModel.prototype.eliminar, body.id, 'usuario');
		});
	});

	context('When error occurs', () => {
		context('When error in validate', () => {
			it('Should 400 if body wrong', async () => {
				sandbox.stub(UsuarioModel.prototype, 'eliminar').resolves(falsoId);

				const req = mockRequest({ body, id: true });
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"id" must be a number' });

				sandbox.assert.notCalled(UsuarioModel.prototype.eliminar);
			});

			context('When error in program', () => {
				it('Should return 500 if method insert fails', async () => {
					sandbox.stub(UsuarioModel.prototype, 'eliminar').rejects(new Error('Error in Delete'));

					const req = mockRequest(body);
					const res = mockResponse();

					await handler(req, res);
					assert.deepStrictEqual(res.status, 500);
					assert.deepStrictEqual(res.json, { message: 'Error: Error in Delete' });

					sandbox.assert.calledOnceWithExactly(UsuarioModel.prototype.eliminar, body.id, 'usuario');
				});
			});

		});
	});
});
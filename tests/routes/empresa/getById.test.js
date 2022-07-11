const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockRequest, mockResponse } = require('../../mocks');

const { handler } = require('../../../src/routes/empresa/src/getById');
const EmpresaModel = require('../../../src/models/Empresa');

describe('GetById Empresa api test', () => {
	afterEach(() => sandbox.restore());

	// variables
	const body = {
		id: 4
	};

	const falsoId = {
		Empresa: {
			id: 4,
			name: 'Google',
			email: 'google@gmail.com'
		}
	};

	const vacio = null;

	context('When no error occurs', () => {
		it('Should 200 if successfully getById', async () => {
			sandbox.stub(EmpresaModel.prototype, 'obtenerPorId').resolves(falsoId);

			const req = mockRequest(body);
			const res = mockResponse();

			await handler(req, res);
			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json, {
				empresa: {
					Empresa: {
						email: 'google@gmail.com',
						id: 4,
						name: 'Google'
					}
				}

			}
			);

			sandbox.assert.calledOnceWithExactly(EmpresaModel.prototype.obtenerPorId, body.id, 'empresa');
		});
	});

	context('When error occurs', () => {
		context('When error in validate', () => {
			it('Should 400 if body wrong', async () => {
				sandbox.stub(EmpresaModel.prototype, 'obtenerPorId').resolves(vacio);

				const req = mockRequest({ ...body, id: true });
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"id" must be a number' });

				sandbox.assert.notCalled(EmpresaModel.prototype.obtenerPorId);
			});

			context('When error in program', () => {
				it('Should return 500 if method insert fails', async () => {
					sandbox.stub(EmpresaModel.prototype, 'obtenerPorId').rejects(new Error('Error in getById'));

					const req = mockRequest(body);
					const res = mockResponse();

					await handler(req, res);
					assert.deepStrictEqual(res.status, 500);
					assert.deepStrictEqual(res.json, { message: 'Error: Error in getById' });

					sandbox.assert.calledOnceWithExactly(EmpresaModel.prototype.obtenerPorId, body.id, 'empresa');
				});
			});

		});
	});
});

const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockRequest, mockResponse } = require('../../mocks');

const { handler } = require('../../../src/routes/empresa/src/create');
const EmpresaModel = require('../../../src/models/Empresa');

describe('Create Empresa api test', () => {
	afterEach(() => sandbox.restore());

	const body = {
		name: 'Google',
		email: 'google@gmail.com'
	};

	const falsoId = {
		code: 'ER_DUP_ENTRY',
		errno: 1062,
		sqlState: '23000',
		sqlMessage: "Duplicate entry 'Google' for key 'empresa.name_UNIQUE'"
	};

	const vacio = null;

	context('When no error occurs', () => {
		it('Should 200 if successfully create', async () => {
			sandbox.stub(EmpresaModel.prototype, 'insertar').resolves(falsoId);

			const req = mockRequest(body);
			const res = mockResponse();

			await handler(req, res);
			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json, { message: 'Se inserto-creo la empresa correctamente' });

			sandbox.assert.calledOnceWithExactly(EmpresaModel.prototype.insertar, body.name, body.email, 'empresa');
		});
	});

	context('When error occurs', () => {
		context('When error in validate', () => {
			it('Should 400 if body wrong', async () => {
				sandbox.stub(EmpresaModel.prototype, 'insertar').resolves(vacio);

				const req = mockRequest({ ...body, email: true });
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"email" must be a string' });

				sandbox.assert.notCalled(EmpresaModel.prototype.insertar);
			});

			it('Should 400 if body wrong', async () => {
				sandbox.stub(EmpresaModel.prototype, 'insertar').resolves(vacio);

				const req = mockRequest({ ...body, name: true });
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"name" must be a string' });

				sandbox.assert.notCalled(EmpresaModel.prototype.insertar);
			});
			/* ver que pasa aca */
			context('When error in program', () => {
				it('Should return 500 if method insert fails', async () => {
					sandbox.stub(EmpresaModel.prototype, 'insertar').rejects(new Error('Error in insert'));

					const req = mockRequest(body);
					const res = mockResponse();

					await handler(req, res);
					assert.deepStrictEqual(res.status, 500);
					assert.deepStrictEqual(res.json, { message: 'Error: Error in insert' });

					sandbox.assert.calledOnceWithExactly(EmpresaModel.prototype.insertar, body.name, body.email, 'empresa');
				});
			});

		});
	});
});

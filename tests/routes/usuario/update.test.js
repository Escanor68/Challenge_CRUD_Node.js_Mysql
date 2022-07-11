const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockRequest, mockResponse } = require('../../mocks');

const { handler } = require('../../../src/routes/usuario/src/update');
const UsuarioModel = require('../../../src/models/Usuario');

describe('Update Usuario api test', () => {
	afterEach(() => sandbox.restore());

	// variables

	const body = {
		id: 4,
		name: 'Ricardo Grebosz',
		email: 'ricardo@gmail.com'
	};

	const bodyIncompletoName = {
		id: 4,
		email: 'ricardo@gmail.com'
	};

	const bodyIncompletoEmail = {
		id: 4,
		name: 'Ricardo Grebosz'
	};

	const bodyIncompleto = {
		name: 'Ricardo Grebosz',
		email: 'ricardo@gmail.com'
	};

	const falsoId = {
		id: 4,
		name: 'Ricardo Grebosz',
		email: 'ricardo@gmail.com'
	};

	const vacio = null;

	context('When no error occurs', () => {
		it('Should 200 if successfully update', async () => {
			sandbox.stub(UsuarioModel.prototype, 'actualizar').resolves(falsoId);

			const req = mockRequest(body);
			const res = mockResponse();

			await handler(req, res);
			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json, { message: 'Se actualizo el usuario correctamente' });

			sandbox.assert.calledOnceWithExactly(UsuarioModel.prototype.actualizar, body.id, body.name, body.email, 'usuario');
		});
	});

	context('When error occurs', () => {
		context('When error in validate', () => {
			it('Should 400 if body wrong', async () => {
				sandbox.stub(UsuarioModel.prototype, 'actualizar').resolves(vacio);

				const req = mockRequest({ ...body, email: true });
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"email" must be a string' });

				sandbox.assert.notCalled(UsuarioModel.prototype.actualizar);
			});

			it('Should 400 if body wrong', async () => {
				sandbox.stub(UsuarioModel.prototype, 'actualizar').resolves(vacio);

				const req = mockRequest({ ...body, name: true });
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"name" must be a string' });

				sandbox.assert.notCalled(UsuarioModel.prototype.actualizar);

			});

			it('Should 400 if body wrong', async () => {
				sandbox.stub(UsuarioModel.prototype, 'actualizar').resolves(vacio);

				const req = mockRequest({ ...body, id: true });
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"id" must be a number' });

				sandbox.assert.notCalled(UsuarioModel.prototype.actualizar);

			});

			it('Should 400 if body wrong', async () => {
				sandbox.stub(UsuarioModel.prototype, 'actualizar').resolves(vacio);

				const req = mockRequest(bodyIncompleto);
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"id" is required' });

				sandbox.assert.notCalled(UsuarioModel.prototype.actualizar);

			});

			it('Should 400 if body wrong', async () => {
				sandbox.stub(UsuarioModel.prototype, 'actualizar').resolves(vacio);

				const req = mockRequest(bodyIncompletoName);
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"name" is required' });

				sandbox.assert.notCalled(UsuarioModel.prototype.actualizar);
			});

			it('Should 400 if body wrong', async () => {
				sandbox.stub(UsuarioModel.prototype, 'actualizar').resolves(vacio);

				const req = mockRequest(bodyIncompletoEmail);
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 400);
				assert.deepStrictEqual(res.json, { error: '"email" is required' });

				sandbox.assert.notCalled(UsuarioModel.prototype.actualizar);
			});

			context('When error in program', () => {
				it('Should return 500 if method insert fails', async () => {
					sandbox.stub(UsuarioModel.prototype, 'actualizar').rejects(new Error('Error in Update'));

					const req = mockRequest(body);
					const res = mockResponse();

					await handler(req, res);
					assert.deepStrictEqual(res.status, 500);
					assert.deepStrictEqual(res.json, { message: 'Error: Error in Update' });

					sandbox.assert.calledOnceWithExactly(UsuarioModel.prototype.actualizar, body.id, body.name, body.email, 'usuario');
				});
			});

		});
	});
});

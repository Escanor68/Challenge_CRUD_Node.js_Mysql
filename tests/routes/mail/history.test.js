const sandbox = require('sinon').createSandbox();
const assert = require('assert');
const { mockRequest, mockResponse } = require('../../mocks');

const { handler } = require('../../../src/routes/mails/src/history');
const ClassModel = require('../../../modules/class/Models');

describe('Get Usuario api test', () => {
	afterEach(() => sandbox.restore());

	// variables
	const falsoId = {
		message: 'Listado de los mails enviados pero de todos'
	};

	context('When no error occurs', () => {
		it('Should 200 if successfully get', async () => {
			sandbox.stub(ClassModel.prototype, 'obtener').resolves(falsoId);

			const req = mockRequest();
			const res = mockResponse();

			await handler(req, res);
			assert.deepStrictEqual(res.status, 200);
			assert.deepStrictEqual(res.json.Usuarios, { message: 'Listado de los mails enviados pero de todos' });

			sandbox.assert.calledOnceWithExactly(ClassModel.prototype.obtener, 'mail');
		});
	});

	context('When error occurs', () => {
		context('When error in program', () => {
			it('Should return 500 if method insert fails', async () => {
				sandbox.stub(ClassModel.prototype, 'obtener').rejects(new Error('Error in Get'));

				const req = mockRequest();
				const res = mockResponse();

				await handler(req, res);
				assert.deepStrictEqual(res.status, 500);
				assert.deepStrictEqual(res.json, { message: 'Error: Error in Get' });

				sandbox.assert.calledOnceWithExactly(ClassModel.prototype.obtener, 'mail');
			});
		});

	});
});

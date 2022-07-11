const Model = require('../../modules/class/Models');

class Empresa extends Model {
	constructor({ name, email }) {
		super();
		this.name = name;
		this.email = email;
	}
}

module.exports = Empresa;

const Model = require('../../modules/class/Models');

class Usuario extends Model {
	constructor({ name, email }) {
		super();
		this.name = name;
		this.email = email;
	}
}

module.exports = Usuario;

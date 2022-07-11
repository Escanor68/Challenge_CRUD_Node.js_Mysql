const Model = require('../../modules/class/Models');
const conexion = require('../../modules/database/Mysql');

class Mail extends Model {
	constructor({ usuariosOempresasJson, contenidoJson }) {
		super();
		this.usuariosOempresasJson = usuariosOempresasJson;
		this.contenidoJson = contenidoJson;
	}

	async insertarMail(usuariosOempresasJson, contenidoJson) {
		return new Promise((resolve, reject) => {
			conexion.query(`insert into ${'mail'}
            (usuariosOempresasJson, contenidoJson)
            values
            (?, ?)`,
			[usuariosOempresasJson, contenidoJson],
			(err, resultados) => {
				if(err)
					reject(err);
				else resolve(resultados.insertId);
			});
		});
	}
}

module.exports = Mail;

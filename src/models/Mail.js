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
			conexion.query(`insert into mail
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

	async obtenerMail() {
		return new Promise((resolve, reject) => {
			conexion.query('select id, usuariosOempresasJson, contenidoJson from mail',
				(err, resultados) => {
					if(err)
						reject(err);
					else resolve(resultados);
				});
		});
	}

	async obtenerPorIdMail(id) {
		return new Promise((resolve, reject) => {
			conexion.query('select id, usuariosOempresasJson, contenidoJson from mail where id = ?',
				[id],
				(err, resultados) => {
					if(err)
						reject(err);
					else resolve(resultados[0]);
				});
		});
	}

	async eliminarMail(id) {
		return new Promise((resolve, reject) => {
			conexion.query(`delete from mail
            where id = ?`,
			[id],
			err => {
				if(err)
					reject(err);
				else resolve();
			});
		});
	}
}

module.exports = Mail;

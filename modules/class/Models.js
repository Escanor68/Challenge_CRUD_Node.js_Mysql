const conexion = require('../database/Mysql');

module.exports = class Model {

	async insertar(name, email, tabla) {
		return new Promise((resolve, reject) => {
			conexion.query(`insert into ${tabla}
            (name, email)
            values
            (?, ?)`,
			[name, email],
			(err, resultados) => {
				if(err)
					reject(err);
				else resolve(resultados.insertId);
			});
		});
	}

	async obtener(tabla) {
		return new Promise((resolve, reject) => {
			conexion.query(`select id, name, email from ${tabla}`,
				(err, resultados) => {
					if(err)
						reject(err);
					else resolve(resultados);
				});
		});
	}

	async obtenerPorId(id, tabla) {
		return new Promise((resolve, reject) => {
			conexion.query(`select id, name, email from ${tabla} where id = ?`,
				[id],
				(err, resultados) => {
					if(err)
						reject(err);
					else resolve(resultados[0]);
				});
		});
	}

	async actualizar(id, name, email, tabla) {
		return new Promise((resolve, reject) => {
			conexion.query(`update ${tabla}
            set name = ?,
            email = ?
            where id = ?`,
			[name, email, id],
			err => {
				if(err)
					reject(err);
				else resolve();
			});
		});
	}

	async eliminar(id, tabla) {
		return new Promise((resolve, reject) => {
			conexion.query(`delete from ${tabla}
            where id = ?`,
			[id],
			err => {
				if(err)
					reject(err);
				else resolve();
			});
		});
	}
};

const vpn_config = {
	user: 'iEx',
	password: 'iEx',
	server: '172.26.167.250',
	database: 'VENTAS',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};



const Xconfig = {
	user: 'iEx',
	password: 'iEx',
	server: 'ELORIGEN\\SQLDEV',
	database: 'VENTAS',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};




const config = {
	user: 'iEx',
	password: 'iEx',
	server: '192.168.0.200',
	database: 'VENTAS',
	pool: {	max: 100,	min: 0,	idleTimeoutMillis: 30000}
};

const sql = require('mssql');

let execute = {
	Query : (res,sqlqry)=>{	
		
		try {
		  const pool1 = new sql.ConnectionPool(config, err => {
			new sql.Request(pool1)
			.query(sqlqry, (err, result) => {
				if(err){
					res.send('error');
					console.log(err.message);
				}else{
					res.send(result);
				}					
			})
			sql.close();  
		  })
		  pool1.on('error', err => {
			  console.log('error sql = ' + err);
			  res.send('error');
			  sql.close();
		  })
		} catch (error) {
			console.log('Error sql: ' + error);
			res.send('error');
			//res.send('Error al ejecutar la consulta: ' + error)   
		  sql.close();
		}
	}
}

module.exports = execute;


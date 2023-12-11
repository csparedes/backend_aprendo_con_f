const mysql = require('mysql2');
require('dotenv').config({ path: '../../.env'});

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});



pool.promise().query('SELECT 1 + 1 AS solution')
  .then(([rows, fields]) => {
    //console.log('The solution is: ', rows[0].solution);
    pool.end();
  })
  .catch(err => {
    console.error('Error al conectarse a la base de datos:', err);
    pool.end();
  });

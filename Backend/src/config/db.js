// Importa el módulo 'mysql2' y lo asigna a la constante 'mysql'
const mysql = require('mysql2');
require('dotenv').config();

// Crea un pool de conexiones utilizando los valores proporcionados
const pool = mysql.createPool({
    // Obtiene el host de la base de datos desde las variables de entorno
    host: process.env.DB_HOST,
    // Obtiene el usuario de la base de datos desde las variables de entorno    
    user: process.env.DB_USER,
    // Obtiene la contraseña de la base de datos desde las variables de entorno
    password: process.env.DB_PASSWORD,
    // Obtiene el puerto de la base de datos desde las variables de entorno
    port: process.env.DB_PORT,
    // Obtiene el nombre de la base de datos desde las variables de entorno
    database: process.env.DB_NAME,   
    // Habilita la interpretación de números decimales
    decimalNumbers: true
    
});

// Asigna el pool de conexiones con promesas a una variable global llamada 'db'
global.db = pool.promise();


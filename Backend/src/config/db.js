// Importa el módulo 'mysql2' y lo asigna a la constante 'mysql'
const mysql = require('mysql2');

// Crea un pool de conexiones utilizando los valores proporcionados
const pool = mysql.createPool({
    // Obtiene el host de la base de datos desde las variables de entorno
    host: "127.0.0.1",
    // Obtiene el usuario de la base de datos desde las variables de entorno    
    user: "root",
    // Obtiene la contraseña de la base de datos desde las variables de entorno
    password: " ",
    // Obtiene el puerto de la base de datos desde las variables de entorno
    port: "3306",
    // Obtiene el nombre de la base de datos desde las variables de entorno
    database: "teacher_app",
    // Obtiene la ruta del socket de la base de datos desde las variables de entorno
   // socketPath: process.env.DB_SOCKETPATH,
    // Habilita la interpretación de números decimales
    decimalNumbers: true
    
});

// Asigna el pool de conexiones con promesas a una variable global llamada 'db'
global.db = pool;

module.exports=pool
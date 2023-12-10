const app = require('../server/start'); // Ruta al archivo principal de la aplicación Express
const http = require('http');

require('dotenv').config({ path: '../../.env'});

function normalizePort(portVal) {  //Verifica que el valor de puerto sea un numero
    const port = parseInt(portVal, 10);
    if (isNaN(port)) {
      return portVal;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }
  



const PORT = process.env.PORT || 3001; //En caso de querer que el nombre del servidor sea oculta utilizar el .env
//app.set('port', PORT);

const server = http.createServer(app); //crea un servidor HTTP utilizando el módulo http de Node.js

server.listen(PORT);
server.on('listening', () => { //se utiliza para escuchar el evento 'listening', que se dispara cuando el servidor comienza a escuchar las conexiones
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


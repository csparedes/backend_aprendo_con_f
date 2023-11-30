const express = require('express');
const app = express();
const cors=require('cors')

// Middleware para el manejo de solicitudes 
app.use(express.json()); // sin esto no se puede hacer req.body y ademas transforma los datos del front a algo mas sencillo de manipular
app.use(express.urlencoded({ extended: true })); // Permite parsear URL codificadas
app.use(cors())
// Funciones que se ejecutan antes y entre el proceso

// Rutas o enrutadores
app.get('/', (req, res) => {
  res.send('<center><h3>Bienvenido a</h3><br/><h2>Express</h2><center>');
});

app.use('/api',require('../routes/api_roles.js'))  //Ruta de Roles de usuario
app.use('/api',require('../routes/api_users.js'))  //Rutas de usuarios en general
// Fin de Rutas ---

// Manejo de errores
app.use((err, req, res, next) => { 
  console.error(err.stack);
  res.status(500).send('Algo salió mal...');
});

module.exports = app;

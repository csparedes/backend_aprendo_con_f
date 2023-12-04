const express = require('express');
const app = express();
const cors=require('cors')
const jwt = require('jsonwebtoken');

// Middleware para el manejo de solicitudes 
app.use(express.json()); // sin esto no se puede hacer req.body y ademas transforma los datos del front a algo mas sencillo de manipular
app.use(express.urlencoded({ extended: true })); // Permite parsear URL codificadas
app.use(cors())
// Funciones que se ejecutan antes y entre el proceso


// Esta clave secreta debe ser guardada de forma segura, nunca en el código
const secretKey = 'claveSecretaSuperSegura';

// Rutas o enrutadores
app.get('/', (req, res) => {
  res.send('<center><h3>Bienvenido a</h3><br/><h2>Express</h2><center>');
});
app.use('/api',require('../routes/api_teacher.js')) //Ruta de profesores
app.use('/api',require('../routes/api_students.js')) //Ruta de Alumnos
app.use('/api',require('../routes/api_roles.js'))  //Ruta de Roles de usuario
app.use('/api',require('../routes/api_users.js'))  //Rutas de usuarios en general
// Fin de Rutas ---

//Ruta de prueba pos
app.use('/user',require('../routes/login.js'))


app.post('/token',(req,res)=>{
  const {id:sub,name}={id:"serial",name:'luis'}
  const token=jwt.sign({
    sub,
    name,
    exp:Date.now() + 60 * 10000 // 10 min de duracion
  }, secretKey)
  res.send({token})
})


app.get('/public',(req,res)=>{
  res.send('ruta publica')
})

app.get('/privada',(req,res)=>{
  try {
    //Bearer
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    const token =req.headers.authorization.split(" ")[1]
    const payload= jwt.verify(token,secretKey)
    if(Date.now() > payload.exp){
      return res.status(401).send({error:"Token exprired"})
    }
    res.send('ruta privada')
    
  } catch (error) {
    res.status(401).send({err:error.message})
  }
})

// Manejo de errores
app.use((err, req, res, next) => { 
  console.error(err.stack);
  res.status(500).send('Algo salió mal...');
});

module.exports = app;

const router = require('express').Router();
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user.model');

// Ruta para iniciar sesión (POST)
router.post('/login', async (req, res) => {  
const user_data = req.body; // {} --> objeto vacio pero existe!!!
  //console.log(user_data); 
  try {
     // si es igual o existe en la base de datos ingresa
    const resultado = await db.promise().query('SELECT * FROM teacher_app.user WHERE email = ?', [user_data.email]);
    //console.log(resultado);
    const rows = resultado[0];
    const password = user_data.password;
    const payload = {
      id: rows[0].id,
      role: rows[0].role
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY);

   //Revisión de email en base de datos;
    const [result] = await UserModel.verificaCorreo( user_data.email, 'El correo existe', 'El correo no existe');
    const valores = Object.values(result[0]); //El correo existe o no existe
    if (valores == 'El correo no existe') {
        return res.json({
                respuesta: false,
                mensaje: 'correo o password incorrectos',
                resultado: null
        });
      }  
    const equals = bcrypt.compareSync(password, rows[0].password)
    if (!equals) {
            return res.json({
                    respuesta: false,
                    mensaje: 'correo o password incorrectos',
                    resultado: null
            });
        }   
        res.json({
                    respuesta: true,
                    mensaje: 'Login Correcto',
                    resultado: token
            }); 
  } catch (error) {
    res.status(401).send({err:error.message})
  }
  
});

module.exports=router
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/user.model');

// Ruta para iniciar sesión (POST)
router.post('/login', async (req, res) => {  
  const user_data = req.body; // {} --> objeto vacio pero existe!!!
  const dataVerify = Object.values(user_data) // [] --> [datos,datos,datos]
  //console.log(user_data);
  
  try {
     // si es igual o existe en la base de datos ingresa
    const resultado = await db.promise().query('SELECT * FROM teacher_app.user WHERE email = ?', [user_data.email]);
    const rows = resultado[0];
    const password = user_data.password;
    const token = jwt.sign({ user_data }, 'secreto', { expiresIn: '1h' });
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
                    mensaje: 'Login corecto',
                    resultado: token
            }); 
  } catch (error) {
    res.status(401).send({err:error.message})
  }
  
});

module.exports=router
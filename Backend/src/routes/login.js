const router = require('express').Router();
const jwt = require('jsonwebtoken');
const db=require('../config/db')

// Ruta para iniciar sesión (POST)
// router.post('/login', async(req, res) => {
//   const user_data = req.body; // {} --> objeto vacio pero existe!!!
//   const dataVerify=Object.values(user_data) // [] --> [datos,datos,datos]
//   try {
//     const [rows] = await db.promise().query('SELECT * FROM teacher_app.user'); //verificar que este aqui mismo
//       const token = jwt.sign({ user_data }, 'secreto', { expiresIn: '1h' }); //lo que envian desde el front, la llave secreta y el tiempo de expiracion
//       const check_username_value=rows.filter((e)=> e.username === dataVerify[0]) //Crea un array
//     if (check_username_value.length > 0 ) { // si es igual o existe en la base de datos ingresa
//         res.status(200).json({ message:token });
//         console.log('Ingreso exitoso')
//       } else {
//         res.status(401).json({ message: 'Credenciales incorrectas' });
//       }
      
//   } catch (error) {
//     res.status(401).send({err:error.message})
//   }
  
// });

module.exports=router
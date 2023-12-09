const router = require('express').Router();
const jwt = require('jsonwebtoken');
const db=require('../config/db')

// Ruta para iniciar sesión (POST)
router.post('/login', async (req, res) => {  
  const user_data = req.body; // {} --> objeto vacio pero existe!!!
  const dataVerify = Object.values(user_data) // [] --> [datos,datos,datos]
  console.log(user_data);
  
  try {
      console.log('Entra al servicio');
     // si es igual o existe en la base de datos ingresa
    const resultado = await db.promise().query('SELECT * FROM teacher_app.user WHERE email = ?', [user_data.email]);
    console.log(resultado);
    
    const rows = resultado[0];
    const token = jwt.sign({ user_data }, 'secreto', { expiresIn: '1h' });
    const check_email_value = rows.filter(row => row.email === dataVerify[0] && row.password === dataVerify[1]);

    if (check_email_value.length > 0 ) {  // si es igual o existe en la base de datos ingresa
        res.status(200).json({ message:token });
        console.log('Ingreso exitoso')
      } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
      }
  } catch (error) {
    console.log('Entra al servicio');
    res.status(401).send({err:error.message})
  }
  
});

module.exports=router
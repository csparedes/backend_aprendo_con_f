const db= require('../config/db');


//GET /api/roles
const getAllRoles =async (req, res) => {
    // pasar los params o req necesarios a la funcion
    try {
        const [rows,fields]= await db.promise().query('select * from teacher_app.role')
        if (rows.length === 0) { //Si no se registro ninguno aun
            return res.status(200).json({ message: 'No se encontraron resultados.' });
          } else {
            return res.status(200).json({ data: rows }); //Lo demas se deben encargar desde el front
          }
    } catch (error) {
        console.error('Error al obtener profesores:', error);
        res.status(500).send('Ocurrió un error al obtener los roles');
    }
   
}


//POST /api/user_roles/new_rol
const createRole = (req, res) => {
    if(Object.entries(req.body).length === 0){
        res.status(204).send('Se esperaba algun valor!!')
        //Manejar la consulta a la base de datos aqui mismo, para insertar el valor
    }else{
        console.log(req.body)// es un objeto valido para insertar
        res.status(200).send('rol creado')
  }
}

const updateRole =  (req, res) => {
   res.send('modificar rol')
}

const deleteRole =  (req, res) => {
     res.send('rol borrado')
}

module.exports = { getAllRoles, createRole, updateRole, deleteRole }


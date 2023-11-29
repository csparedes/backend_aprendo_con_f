const db= require('../config/db')
const getAllProfesores = async (req, res) => { //Debe traer todos los profesores de la base de datos
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM teacher_app.user');
        if (rows.length === 0) { //Si no se registro ninguno aun
            res.status(200).json({ message: 'No se encontraron resultados.' });
            console.log(rows); // Aquí tienes los resultados de la consulta
            return
          } else {
            return res.status(200).json({ data: rows }); //Lo demas se deben encargar desde el front
          }
    } catch (error) {
        console.error('Error al obtener profesores:', error);
        res.status(404).send('Ocurrió un error al obtener los profesores');
    }
}

const createProfesor = (req, res) => {
    res.send('Crea profesor');
}

const updateProfesor = (req, res) => {
    res.send('Actauliza profesor');
}

const deleteProfesor = (req, res) => {
    res.send('Borra profesor');
}

module.exports = {getAllProfesores,createProfesor, updateProfesor, deleteProfesor}
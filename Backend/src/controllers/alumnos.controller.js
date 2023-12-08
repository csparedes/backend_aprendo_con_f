const db= require('../config/db')
const getAllAlumnos = async(req, res) => {
    try {
        const [rows, fields] = await db.promise().query('SELECT * FROM teacher_app.user');
        console.log(rows); // Aquí tienes los resultados de la consulta
        if (rows.length === 0) { //Si no se registro ninguno aun
            return res.status(200).json({ message: 'No se encontraron resultados.' });
          } else {
            return res.status(200).json({ data: rows }); //Lo demas se deben encargar desde el front
          }
    } catch (error) {
        console.error('Error al obtener profesores:', error);
        res.status(500).send('Ocurrió un error al obtener los profesores');
    }
}

const createAlumno = (req, res) => { 
    res.send('Alumno creador');
}

const updateAlumno = (req, res) => {
    res.send('Actualiza alumno');
}

const deleteAlumno = (req, res) => {
    res.send('Borra alumno');
}

module.exports = { getAllAlumnos, createAlumno, updateAlumno, deleteAlumno }
const UserModel = require('../models/user.model');
const db= require('../config/db')

const getAllUsers = async (req, res) => {
    try {
        const [rows] = await db.promise().query('SELECT * FROM teacher_app.user');
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

const getUsersByRol = async (req, res) => {
    try {
        const { roleId } = req.params;
        const [result] = await UserModel.selectUserByRol(roleId)
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getUserByRolAndState = async (req, res) => {
    try {
        const { isActive } = req.params;
        const [result] = await UserModel.selectUserByRolAndState("Profesor",isActive)
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const [result] = await UserModel.insertUser(req.body);
        const [user] = await UserModel.selectUserById(result.insertId)
        res.json(user);

    } catch (error) {
        res.json({ fatal: error.message });
    }

}

const updateUser = (req, res) => {
    res.send('Actualiza alumno');
}

const deleteUser = (req, res) => {
    res.send('Borra alumno');
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUsersByRol, getUserByRolAndState }
const UserModel = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try {
        const [result] = await UserModel.selectAllUser();
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
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
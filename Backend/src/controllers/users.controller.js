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

const getProfessorActive = async (req, res) => {
    try {
        const [result] = await UserModel.selectProfessorActive();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getProfessorActiveById = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.selectProfessorActiveById(userId);
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getDataProfessorByArea = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.selectDataProfessorByArea(userId);
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getDataStudentsByProfesor = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.selectDataStudentsByProfesor(userId);
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getDataStudentsByArea = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.selectDataStudentsByArea(userId);
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getDataStudentsById = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.selectDataStudentsById(userId);
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getDataUserStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const [result] = await UserModel.selectDataUserStatus(status);
        
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

module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUsersByRol, getProfessorActive, getProfessorActiveById, getDataProfessorByArea, getDataStudentsByProfesor, getDataStudentsByArea, getDataStudentsById, getDataUserStatus }
const db=require('../config/db')
const UserModel = require('../models/user.model');
const KnowledgeModel = require('../models/knowledge_area.model');

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

const getDataStudentsByIdProfesor = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.selectDataStudentsByIdProfesor(userId);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getDataProfesoresByIdStudent = async (req, res) => {
    console.log('hola');
    try {
        const { userId } = req.params;
        console.log(userId);
        const [result] = await UserModel.selectDataProfesoresByIdStudent(userId);
        console.log('hola');
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

const getAllDataProfesores = async (req, res) => {
    try {
        const { status } = req.params;
        const [result] = await UserModel.selectAllProfesorByStatus(status)
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAllDataEstudiante = async (req, res) => {
    try {
        const { status } = req.params;
        const [result] = await UserModel.selectAllDataEstudiante(status);
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getDatosByRol= async (req, res) => {
    try {
        const { role } = req.params;
        const [result] = await UserModel.selectDatosByRol(role);
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getDatosById= async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.selectUserById(userId);
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAllDataProfesoresById = async (req, res) => {
    try {
        const { status, userId } = req.params;
        const [result] = await UserModel.selectAllProfesorByStatusAndId(status, userId)
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAllDataEstudianteById = async (req, res) => {
    try {
        const { status, userId } = req.params;
        const [result] = await UserModel.selectAllDataEstudianteById(status, userId)
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAllProfesor = async (req, res) => {
    try {        
        const [result] = await UserModel.selectAllProfesor();
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAllEstudiante = async (req, res) => {
    try {        
        const [result] = await UserModel.selectAllEstudiante();
        
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}


const createUser = async (req, res) => {
    try {
        const [result] = await UserModel.insertUser(req.body);
        const [user] = await UserModel.selectUserById(result.insertId)
        const resultado = {
            respuesta: true,
            mensaje: 'Usuario insertado con éxito',
            resultado: user
        }
        res.json(resultado);

    } catch (error) {
        let mensaje = "";
        if (error.code == 'ER_DUP_ENTRY') {
            mensaje = 'El email ingresado ya se encuentra registrado'
        }
        res.json({
            respuesta: false,
            fatal: error.message,
            mensaje: mensaje
        });
    }

}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.updateUserById(userId, req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const updateUserEstadoById = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await UserModel.updateEstadoById(userId, req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const insertKnowledgeForProfesor = async (req, res) => {
    try {
        const [user] = await UserModel.createUser();        
        const [result] = await UserModel.selectAllProfesorByStatusAndId(user.status, user.id)        

    } catch (error) {
        res.json({ fatal: error.message });
    }
}


const deleteUser = (req, res) => {
    res.send('Borra usuario');
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUsersByRol, getProfessorActive, getProfessorActiveById, getDataProfessorByArea, getDataStudentsByProfesor, getDataStudentsByArea, getDataStudentsById, getDataUserStatus,
    getAllDataProfesores, getAllDataEstudiante, getDatosByRol, getDatosById, updateUserEstadoById, getAllDataProfesoresById, getAllDataEstudianteById, getAllProfesor, getAllEstudiante, getDataStudentsByIdProfesor, getDataProfesoresByIdStudent}
const db=require('../config/db')
const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');

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


const deleteUser = (req, res) => {
    res.send('Borra usuario');
}

//REGISTRO DE USUSARIOS
const register = async(req, res) => {
    try {
        // Encriptamos el password
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        console.log(req.body);
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

//LOGIN DE USUARIOS
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //Revisión de email en base de datos;
        const [result] = await UserModel.verificaCorreo(email, 'El correo existe', 'El correo no existe');
        const valores = Object.values(result[0]); //El correo existe o no existe
        if (valores == 'El correo no existe') {
            return res.json({
                    respuesta: false,
                    mensaje: 'correo o password incorrectos',
                    resultado: null
            });
        }
        //coinicide el password de la base de datos con la de l body
        const [user] = await UserModel.userByEmail(email);
        console.log(user[0].password);
        const equals = bcrypt.compareSync(password, user[0].password);
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
                    resultado: 'Enviar token'
            }); 
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { getAllUsers, createUser, updateUser, deleteUser, getUsersByRol, getProfessorActive, getProfessorActiveById, getDataProfessorByArea, getDataStudentsByProfesor, getDataStudentsByArea, getDataStudentsById, getDataUserStatus,
    getAllDataProfesores, getAllDataEstudiante, getDatosByRol, getDatosById, updateUserEstadoById, getAllDataProfesoresById, getAllDataEstudianteById,register,login }
const jsonwebtoken = require('jsonwebtoken');
const UserModel = require('../models/user.model');

const checkToken = async(req, res, next) => {
    const token = req.headers['authorization']
    // Comprobar si el token viene en cabecera
    if (!token) {
        return res.status(403).json({
            respuesta: false,
            mensaje: 'Necesitas la cabecera de autorización',
            resultado: null
        });
    }
    // Comprobar si el token es valido
    let payload;
    try {
        payload = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.status(403).json ({
            fatal: error.message
        })
    }

    // Recuperar el usuario que realiza la petición
        const user = await UserModel.selectUserById(payload.id);
        req.user = user[0][0];

    next();
}

module.exports = checkToken;
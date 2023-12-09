const jsonwebtoken = require('jsonwebtoken');

const checkToken = (req, res, next) => {
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
    try {
        const payload = jsonwebtoken.verify(token, process.env.SECRET_KEY);
        console.log(payload);
    } catch (error) {
        return res.status(403).json ({
            fatal: error.message
        })
    }

    // Recuperar el usuario que realiza la petición

    next();
}

module.exports = checkToken;
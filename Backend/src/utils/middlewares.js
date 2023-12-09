const checkToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, secreto, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'Token inválido' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Token no proporcionado' });
  }
}

module.exports = {checkToken};
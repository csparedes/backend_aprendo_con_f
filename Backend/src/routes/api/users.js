const router = require('express').Router();

const UserController = require('../../controllers/users.controller');

router.get('/', UserController.getAllUsers);
router.post('/new_user', UserController.createUser); // Es necesario crear otro usuario? eligen el rol a la hora de crear usuario
router.put('/:userId', UserController.updateUser); //Modificar en ruta del rol especifico
router.delete('/:userId', UserController.deleteUser); //Borrar en la ruta de rol especifico

module.exports = router;
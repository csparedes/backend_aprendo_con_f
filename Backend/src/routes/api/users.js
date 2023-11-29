const router = require('express').Router();

const UserController = require('../../controllers/users.controller');

router.get('/', UserController.getAllUsers);
router.get('/role/:roleId', UserController.getUsersByRol);
router.post('/', UserController.createUser); 
router.put('/:userId', UserController.updateUser); //Modificar en ruta del rol especifico
router.delete('/:userId', UserController.deleteUser); //Borrar en la ruta de rol especifico


module.exports = router;
const router = require('express').Router();

const UserController = require('../../controllers/users.controller');

router.get('/', UserController.getAllUsers);
router.get('/profesor', UserController.getProfessorActive);
router.get('/profesor/:userId', UserController.getProfessorActiveById);
router.get('/profesor/area/:userId', UserController.getDataProfessorByArea);
router.get('/student/profesor/:userId', UserController.getDataStudentsByProfesor);
router.get('/student/area/:userId', UserController.getDataStudentsByArea);
router.get('/student/:userId', UserController.getDataStudentsById);
router.get('/:status', UserController.getDataUserStatus);

router.post('/', UserController.createUser); 
router.put('/:userId', UserController.updateUser); //Modificar en ruta del rol especifico
router.delete('/:userId', UserController.deleteUser); //Borrar en la ruta de rol especifico


module.exports = router;
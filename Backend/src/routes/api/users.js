const router = require('express').Router();

const UserController = require('../../controllers/users.controller');

router.get('/', UserController.getAllUsers);//Devuelve todos los usuarios
router.get('/profesor', UserController.getProfessorActive);//Devuelve todos los profesores con estado activo
router.get('/profesor/:userId', UserController.getProfessorActiveById); //Devuelve todos los profesores con estado activo por id
router.get('/profesor/area/:userId', UserController.getDataProfessorByArea);
router.get('/student/profesor/:userId', UserController.getDataStudentsByProfesor);
router.get('/student/area/:userId', UserController.getDataStudentsByArea);
router.get('/student/:userId', UserController.getDataStudentsById); //Obtiene los datos del estudiante por id
router.get('/:status', UserController.getDataUserStatus); //Obtiene todos los datos por status
router.get('/profesores/:status', UserController.getAllDataProfesores);  //Obtiene todos los datos del profesor incluido rating y area
router.get('/profesores/:status/:userId', UserController.getAllDataProfesoresById);  //Obtiene todos los datos del profesor incluido rating y area por status y Id
router.get('/estudiante/:status', UserController.getAllDataEstudiante); //Obtiene todos los datos del estudiante incluido  area
router.get('/estudiante/:status/:userId', UserController.getAllDataEstudianteById); //Obtiene todos los datos del estudiante incluido  area por status y Id
router.get('/datos/:role', UserController.getDatosByRol); //Obtiene todos datos por rol
router.get('/data/:userId', UserController.getDatosById); //Obtiene todos datos por id
router.post('/', UserController.createUser); //insertar datos usuario
router.put('/:userId', UserController.updateUser); //actualizar datos usuario
router.put('/estado/:userId', UserController.updateUserEstadoById); //actualizar el estado del usuario por id
router.delete('/:userId', UserController.deleteUser);


module.exports = router;

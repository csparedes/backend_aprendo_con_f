const router = require('express').Router();

const UserController = require('../../controllers/users.controller');

router.get('/', UserController.getAllUsers);//Devuelve todos los usuarios
router.get('/profesor', UserController.getProfessorActive);//Devuelve todos los profesores con estado activo
router.get('/profesor/:userId', UserController.getProfessorActiveById); //Devuelve todos los profesores con estado activo por id
router.get('/estudiante/:userId', UserController.getDataStudentsById); //Obtiene los datos del estudiante por id
router.get('/profesores/:status', UserController.getAllDataProfesores);  //Obtiene todos los datos del profesor incluido rating y area
router.get('/profesores/:status/:userId', UserController.getAllDataProfesoresById);  //Obtiene todos los datos del profesor incluido rating y area por status y Id
router.get('/estudiante/:status', UserController.getAllDataEstudiante); //Obtiene todos los datos del estudiante incluido  area
router.get('/estudiante/:status/:userId', UserController.getAllDataEstudianteById); //Obtiene todos los datos del estudiante incluido  area por status y Id
router.get('/prof/allProfesor', UserController.getAllProfesor);//Devuelve todos los profesores todos los status
router.get('/est/allEstudiante', UserController.getAllEstudiante);//Devuelve todos los estudiante todos los status
router.post('/', UserController.createUser); //insertar datos usuario
router.post('/area', UserController.insertAreas);
router.post('/register', UserController.register);//Registrar usuario
router.put('/estado/:userId', UserController.updateUserEstadoById); //actualizar el estado del usuario por id

router.get('/profesor/estudiantes/:userId', UserController.getDataStudentsByIdProfesor);//Devuelve los estudiantes de acuerdo al id del profesor
router.get('/student/profesores/:userId', UserController.getDataProfesoresByIdStudent);//Devuelve los profesores de acuerdo al id del estudiante

//router.get('/profesor/area/:userId', UserController.getDataProfessorByArea);
//router.get('/student/profesor/:userId', UserController.getDataStudentsByProfesor);
//router.get('/student/area/:userId', UserController.getDataStudentsByArea);
//router.get('/:status', UserController.getDataUserStatus); //Obtiene todos los datos por status
//router.get('/datos/:role', UserController.getDatosByRol); //Obtiene todos datos por rol
//router.get('/data/:userId', UserController.getDatosById); //Obtiene todos datos por id
//router.put('/:userId', UserController.updateUser); //actualizar datos usuario
//router.delete('/:userId', UserController.deleteUser); 

module.exports = router;


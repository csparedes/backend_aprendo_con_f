const router = require('express').Router();

const ProfesoresController = require('../../controllers/profesores.controller');

router.get('/', ProfesoresController.getAllProfesores);
router.post('/new_teacher', ProfesoresController.createProfesor);
router.put('/:profesorId', ProfesoresController.updateProfesor);
router.delete('/:profesorId',ProfesoresController.deleteProfesor);

module.exports = router;
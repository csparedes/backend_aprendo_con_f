const router = require('express').Router();

const EnrollmentController = require('../../controllers/enrollments.controller');

router.get('/', EnrollmentController.getAllEnrollmentStudent);
router.get('/average/:userId', EnrollmentController.getAverageRatingById);//promedio del rating por id 
router.get('/average/', EnrollmentController.getAverageRating); //promedio del rating de todos 
router.post('/', EnrollmentController.createEnrollmentStudent); //crear el enrolamiento de usuarios

module.exports = router;
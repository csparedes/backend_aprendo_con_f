const router = require('express').Router();

router.use('/users', require('./api/users'));
router.use('/enrollments', require('./api/enrollments'));

module.exports = router;
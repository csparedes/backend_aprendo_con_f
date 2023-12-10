const router = require('express').Router();

router.use('/users', require('./api/users'));
router.use('/enrollments', require('./api/enrollments'));
router.use('/knowledge', require('./api/knowledge_area'));

module.exports = router;
const router = require('express').Router();
const {checkToken} = require('../utils/middlewares');   

router.use('/users', checkToken, require('./api/users'));
router.use('/enrollments', require('./api/enrollments'));
router.use('/knowledge', require('./api/knowledge_area'));

module.exports = router;
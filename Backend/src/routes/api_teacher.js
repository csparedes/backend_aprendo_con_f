const router = require('express').Router();

router.use('/teacher',require('./api/profesores.js'))

module.exports=router
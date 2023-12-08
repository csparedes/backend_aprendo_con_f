const router = require('express').Router();

router.use('/students',require('./api/alumnos.js'))

module.exports=router

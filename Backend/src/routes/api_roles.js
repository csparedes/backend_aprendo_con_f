const router = require('express').Router();

router.use('/user_roles',require('./api/roles.js'))

module.exports= router
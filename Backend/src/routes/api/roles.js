const router = require('express').Router();

const RolesController = require('../../controllers/roles.controller');

router.get('/', RolesController.getAllRoles);
router.post('/new_rol', RolesController.createRole);
router.put('/:roleId', RolesController.updateRole);
router.delete('/:roleId', RolesController.deleteRole);


module.exports = router;
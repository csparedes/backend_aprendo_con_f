const db=require('../config/db')
const selectAllRole = (req,res) =>{
    return db.query('select * from teacher_app.role');

}

const selectRoleById = (roleId) => {
    return db.query('select * from teacher_app.role where id = ?', [roleId]);
}

const insertRole = ({role_name}) =>{
     return db.query('insert into teacher_app.role(role_name) values(?)', [role_name]);
}

const updateRoleById = (roleId, {role_name}) =>{
    return db.query('update teacher_app.role set role_name = ? WHERE id = ?', [role_name, roleId]);
}

const deleteRoleById = (role_id) => {
    return db.query('delete from teacher_app.role where id = ?', [role_id]);
}

module.exports = {selectAllRole, insertRole, updateRoleById, deleteRoleById, selectRoleById};
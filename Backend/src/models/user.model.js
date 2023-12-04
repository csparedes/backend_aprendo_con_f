/*Get All Registered Users*/
const selectAllUser = () => {
    return db.query('select * from teacher_app.user');
}

/*Get User by ID */
const selectUserById = (userId) => {
    return db.query('select * from teacher_app.user where id = ?', [userId])
}

/*Get User by role*/
const selectUserByRol = (roleId) => {
    return db.query('select * from teacher_app.user where role_id = ?', [roleId])
}

/*Get All Active Professor - Get All Inactive Professors 
select * from teacher_app.user u join teacher_app.role r on u.role_id = r.id where r.role_name = 'Profesor' and u.isActive = 1*/
const selectUserByRolAndState = (isActive, roleName) => {
    return db.query('select * from teacher_app.user u join teacher_app.role r on u.role_id = r.id where r.role_name = ? and u.isActive = ?', [roleName , isActive]);
}

/*insert usuario*/ 
const insertUser = ({username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone}) => {
    return db.query('insert into teacher_app.user(username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [username, password,email, name, postal_code, country, role_id, isActive, longitude, latitude, experience, hourly_rate,image,phone])

}


module.exports = {selectAllUser, selectUserByRol, insertUser, selectUserByRolAndState}
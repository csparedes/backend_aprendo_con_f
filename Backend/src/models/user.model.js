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

/*insert usuario*/ 
const insertUser = ({username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone}) => {
    return db.query('insert into teacher_app.user(username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [username, password,email, name, postal_code, country, role_id, isActive, longitude, latitude, experience, hourly_rate,image,phone])

}


module.exports = {selectAllUser, selectUserByRol, insertUser}
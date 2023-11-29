const selectAllUser = () => {
    return db.query('select * from teacher_app.user');

}

const selectUserByRol = (roleId) => {
    return db.query('select * from teacher_app.user where role_id = ?', [roleId])
}

const insertUser = ({username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone}) => {
    return db.query('insert into teacher_app.user(username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [username, password,email, name, postal_code, country, role_id, isActive, longitude, latitude, experience, hourly_rate,image,phone])

}

const insertAlumnoProfesor = ({username,password,email,name,postal_code,country,role_id,experience}) => {
    return db.query('insert into teacher_app.user(username,password,email,name,postal_code,country,role_id) values(?,?,?,?,?,?,?,?)',
    [username, password,email, name, postal_code, country, role_id,experience])

}

module.exports = {selectAllUser, selectUserByRol, insertUser, insertAlumnoProfesor}
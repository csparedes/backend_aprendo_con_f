const sqlDataByRol = 'select u.id, r.role_name, u.isActive, u.username, u.password, u.email, u.postal_code, u.country, u.name, u.image,  u.longitude, u.latitude, u.hourly_rate, u.phone '+
    'from teacher_app.user u inner join teacher_app.role r on u.role_id = r.id ';

const sqlDataByRolAndKnowledge = 'select u.id, r.role_name, u.isActive, u.username, u.password, u.email, u.postal_code, u.country, u.name, u.image,  ka.area, u.longitude, u.latitude, u.hourly_rate, u.phone,ka.description'+
    ' from teacher_app.user u inner join teacher_app.role r on u.role_id = r.id'+
    ' join teacher_app.knowledge_area ka on u.id = ka.teacher_id   ';    

const sqlDataByRolAndKnowledgeAndRating = 'select u.id, r.role_name, u.isActive, u.username, u.password, u.email, u.postal_code, u.country, u.name, u.image,  ka.area, u.longitude, u.latitude, u.hourly_rate, u.phone,ka.description, '+
    ' (SELECT avg(rating) '+
    ' FROM teacher_app.student_enrollment se'+
    ' where se.teacher_id = u.id) as rating'+
    ' from teacher_app.user u inner join teacher_app.role r on u.role_id = r.id'+
    ' join teacher_app.knowledge_area ka on u.id = ka.teacher_id   ';       

/*Get All Registered Users*/
const selectAllUser = () => {
    return db.query('select * from teacher_app.user');
}

/*Get User by ID */
const selectUserById = (userId) => {
    return db.query('select * from teacher_app.user where id = ?', [userId]);
}

/*Get User by role*/
const selectUserByRol = (roleId) => {
    return db.query('select * from teacher_app.user where role_id = ?', [roleId]);
}

/*Get  */
const selectDataByRol = (roleId) => {
    return db.query(sqlDataByRol + 'where u.role_id = ?' , [roleId]);
}

const selectDataByRolAndKnowledge = (roleId) => {
    return db.query(sqlDataByRolAndKnowledge + 'where u.role_id = ?' , [roleId]);
}

const selectDataByRolAndKnowledgeAndRating = (roleId) => {
    return db.query(sqlDataByRolAndKnowledgeAndRating + 'where u.role_id = ?' , [roleId]);
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


module.exports = {selectAllUser, selectUserByRol, insertUser, selectUserByRolAndState, selectDataByRol,selectDataByRolAndKnowledge, selectDataByRolAndKnowledgeAndRating}
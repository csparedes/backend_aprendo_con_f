const sqlAllDataProfesor= 'SELECT usr.id,usr.name,usr.email,usr.country,usr.city,usr.imageUrl,usr.hourly_rate,usr.role,usr.experience,usr.description,ka.teacher_id,GROUP_CONCAT(ka.area SEPARATOR \',\') AS areas,FLOOR(ROUND(subquery.rating,2)) AS rating '+
'FROM teacher_app.User usr LEFT JOIN teacher_app.Knowledge_area ka ON usr.id = ka.teacher_id '+
'LEFT JOIN ( '+
'  SELECT enr.teacher_id, AVG(enr.rating) AS rating '+
'  FROM teacher_app.student_enrollment enr '+
'  GROUP BY enr.teacher_id '+
') AS subquery ON usr.id = subquery.teacher_id '+
'WHERE usr.role = ? AND usr.status = ? '+
'GROUP BY usr.id, usr.name, usr.email, usr.country, usr.city, usr.imageUrl, usr.hourly_rate, ka.teacher_id, subquery.rating ';

const sqlAllDataProfesorById= 'SELECT usr.id,usr.name,usr.email,usr.country,usr.city,usr.imageUrl,usr.hourly_rate,usr.role,usr.experience,usr.description,ka.teacher_id,GROUP_CONCAT(ka.area SEPARATOR \',\') AS areas,FLOOR(ROUND(subquery.rating,2)) AS rating '+
'FROM teacher_app.User usr LEFT JOIN teacher_app.Knowledge_area ka ON usr.id = ka.teacher_id '+
'LEFT JOIN ( '+
'  SELECT enr.teacher_id, AVG(enr.rating) AS rating '+
'  FROM teacher_app.student_enrollment enr '+
'  GROUP BY enr.teacher_id '+
') AS subquery ON usr.id = subquery.teacher_id '+
'WHERE usr.role = ? AND usr.status = ? and usr.id = ? '+
'GROUP BY usr.id, usr.name, usr.email, usr.country, usr.city, usr.imageUrl, usr.hourly_rate, ka.teacher_id, subquery.rating ';

const sqlDataStudentsByIdProfesor = 
    "SELECT usr.id, usr.name, usr.email, se.teacher_id, GROUP_CONCAT(ka.area SEPARATOR ', ') AS areas " +
    "FROM teacher_app.User usr " +
    "JOIN teacher_app.student_enrollment se ON usr.id = se.student_id " +
    "JOIN teacher_app.knowledge_area ka ON se.teacher_id = ka.teacher_id " +
    "WHERE usr.status = 'activo'";

    const sqlDataProfesoresByIdStudent = 
    "SELECT u.id, u.name, u.email, u.country, u.city, GROUP_CONCAT(ka.area SEPARATOR ', ') AS areas_de_conocimiento " +
    "FROM teacher_app.user u " +
    "INNER JOIN teacher_app.student_enrollment se ON u.id = se.teacher_id " +
    "INNER JOIN teacher_app.knowledge_area ka ON u.id = ka.teacher_id";

const sqlAllDataEstudiante= 'SELECT usr.id,usr.name,usr.email,usr.country,usr.city,usr.status,GROUP_CONCAT(enka.area SEPARATOR  \',\') AS areas '+
    'FROM teacher_app.User usr '+
    'JOIN teacher_app.student_enrollment enst ON usr.id = enst.student_id '+
    'JOIN teacher_app.knowledge_area enka ON enst.teacher_id=enka.teacher_id '+
    'WHERE usr.role = ? AND usr.status = ? '+
    'GROUP BY usr.id, usr.name, usr.email, usr.country, usr.city ';

    const sqlAllDataEstudianteById = 'SELECT usr.id, usr.name, usr.email, usr.country, usr.city, usr.status, GROUP_CONCAT(enka.area SEPARATOR \',\') AS areas ' +
    'FROM teacher_app.User usr ' +
    'JOIN teacher_app.student_enrollment enst ON usr.id = enst.student_id ' +
    'JOIN teacher_app.knowledge_area enka ON enst.teacher_id = enka.teacher_id ' +
    'WHERE usr.role = ? AND usr.status = ? AND usr.id = ? ' +
    'GROUP BY usr.id, usr.name, usr.email, usr.country, usr.city';

const sqlDatosByRol= 'SELECT * FROM teacher_app.user where role = ?';  

const sqlProfesor= 'SELECT usr.id,usr.name,usr.email,usr.country,usr.city,usr.imageUrl,usr.hourly_rate,usr.role,usr.experience,usr.description,ka.teacher_id,GROUP_CONCAT(ka.area SEPARATOR \',\') AS areas,FLOOR(ROUND(subquery.rating,2)) AS rating, usr.status '+
    'FROM teacher_app.User usr LEFT JOIN teacher_app.Knowledge_area ka ON usr.id = ka.teacher_id '+
    'LEFT JOIN ( '+
    '  SELECT enr.teacher_id, AVG(enr.rating) AS rating '+
    '  FROM teacher_app.student_enrollment enr '+
    '  GROUP BY enr.teacher_id '+
    ') AS subquery ON usr.id = subquery.teacher_id '+
    'WHERE usr.role = ?'+
    'GROUP BY usr.id, usr.name, usr.email, usr.country, usr.city, usr.imageUrl, usr.hourly_rate, ka.teacher_id, subquery.rating ';

const sqlEstudiante= 'SELECT usr.id,usr.name,usr.email,usr.country,usr.city,usr.status,GROUP_CONCAT(enka.area SEPARATOR  \',\') AS areas, usr.status '+
    'FROM teacher_app.User usr '+
    'LEFT JOIN teacher_app.student_enrollment enst ON usr.id = enst.student_id '+
    'LEFT JOIN teacher_app.knowledge_area enka ON enst.teacher_id=enka.teacher_id '+
    'WHERE usr.role = ? '+
    'GROUP BY usr.id, usr.name, usr.email, usr.country, usr.city ';



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


/*Get All Active Professor Active */
const selectProfessorActive= () => {
    return db.query(sqlDataProfessorActive, ['profesor' , 'activo']);
}

/*Get All Active Professor Active By Id */
const selectProfessorActiveById= (userId) => {
    return db.query(sqlDataProfessorActive + 'AND usr.id=?', ['profesor' , 'activo', userId]);
}






/*Get Student by Id*/
const selectDataStudentsById= (studenId) => {
    return db.query(sqlDataStudentsById + 'WHERE usr.role = ? AND enst.student_id= ?', ['estudiante', studenId]);
}



/*Get All Profesores activos*/
const selectAllProfesorByStatus = (status) => {
    return db.query(sqlAllDataProfesor, ['profesor', status]);
}

/*Get All Estudiante por estado*/
const selectAllDataEstudiante= (status) => {
    return db.query(sqlAllDataEstudiante , ['estudiante', status]);
}

/*Get Datos por rol*/
const selectDatosByRol= (role) => {
    return db.query(sqlDatosByRol , [role]);
}

/*Get All Profesores activos por id*/
const selectAllProfesorByStatusAndId = (status, userId) => {
    return db.query(sqlAllDataProfesorById, ['profesor', status, userId]);
}

/*Get All Profesores activos por id*/
const selectAllDataEstudianteById = (status, userId) => {
    return db.query(sqlAllDataEstudianteById, ['estudiante', status, userId]);
}

/*Get All Profesores*/
const selectAllProfesor = () => {
    return db.query(sqlProfesor, ['profesor']);
}

/*Get All Profesores*/
const selectAllEstudiante = () => {
    return db.query(sqlEstudiante, ['estudiante']);
}

/*insert usuario*/ 

const insertUser = ({username,password,email,name,postal_code,country,longitude,latitude,experience,hourly_rate,imageUrl,phone,role,description,status,city}) => {
    return db.query('INSERT INTO teacher_app.user(username,password,email,name,postal_code,country,longitude,latitude,experience,hourly_rate,imageUrl,phone,role,description,status,city) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [username,password,email,name,postal_code,country,longitude,latitude,experience,hourly_rate,imageUrl,phone,role,description,status,city])

}

//actualiza todos los datos del usuario
const updateUserById = (userId, {username,password,email,name,postal_code,country,longitude,latitude,experience,hourly_rate,imageUrl,phone,role,description,status,city}) =>{
    return db.query('UPDATE teacher_app.user SET username = ?, password = ?, email = ?, name = ?, postal_code = ?, country = ?, longitude = ?, latitude = ?, experience = ?, hourly_rate = ?, imageUrl = ?, phone = ?, role = ?, description = ?, status = ?, city = ? WHERE id = ?', 
    [username,password,email,name,postal_code,country,longitude,latitude,experience,hourly_rate,imageUrl,phone,role,description,status,city, userId]);
}

//actualiza el estado del usuario

const updateEstadoById = (userId, {status}) =>{
    return db.query('UPDATE teacher_app.user SET status = ? WHERE id = ?', [status,userId]);
}

//borrar el usuario
const deleteUser = (userId) =>{
    return db.query('DELETE FROM teacher_app.user WHERE id = ?', [userId]);
}

//Login
const verificaCorreo = (correo, mc,mi) => {
    return db.query('SELECT CASE WHEN EXISTS(SELECT * FROM teacher_app.user WHERE email = ?)THEN ? ELSE ? END;', [correo, mc, mi]);
}
const userByEmail = (correo) => {
    return db.query('SELECT * FROM teacher_app.user WHERE email = ?', [correo]);
}

/*Get Students by Id Professor*/
const selectDataStudentsByIdProfesor = (teacherId) => {
    return db.query(sqlDataStudentsByIdProfesor + ' AND se.teacher_id = ? GROUP BY usr.id, se.teacher_id;', [teacherId]);
};


/*Get Profesores by Id Student*/
const selectDataProfesoresByIdStudent = (studentId) => {
    return db.query(sqlDataProfesoresByIdStudent + 
    " WHERE se.student_id = ? AND se.active=1 GROUP BY u.id, u.name, u.email, u.country, u.city;", [studentId]);
}


/*module.exports = {selectAllUser, selectUserByRol, insertUser, selectProfessorActive,selectProfessorActiveById,selectDataProfessorByArea, selectDataStudentsByProfesor, selectDataStudentsByArea, selectDataStudentsById, selectDataUserStatus, selectUserById, 
    selectAllProfesorByStatus, selectAllDataEstudiante, selectDatosByRol, updateUserById, updateEstadoById, selectAllProfesorByStatusAndId, selectAllDataEstudianteById, selectAllProfesor, selectAllEstudiante}*/

module.exports = {selectAllUser, selectUserByRol, insertUser, selectProfessorActive,selectProfessorActiveById,selectDataStudentsById, selectUserById, 
        selectAllProfesorByStatus, selectAllDataEstudiante, selectDatosByRol, updateUserById, updateEstadoById, selectAllProfesorByStatusAndId, selectAllDataEstudianteById, selectAllProfesor, selectAllEstudiante,verificaCorreo,userByEmail, selectDataStudentsByIdProfesor, selectDataProfesoresByIdStudent}
    

/*const sqlDataProfessorByArea = 'SELECT usr.id, usr.name, ka.teacher_id, ka.area FROM teacher_app.User usr ' +
    'JOIN teacher_app.Knowledge_area ka ON usr.id = ka.teacher_id '+
    'WHERE usr.role = ? '+
    'AND usr.status= ? ';*/

/*Get  Professor By Area */
/*const selectDataProfessorByArea= (userId) => {
    return db.query(sqlDataProfessorByArea + 'AND usr.id=?', ['profesor' , 'activo', userId]);
}*/    

/*const sqlDataStudentsByProfesor = 'SELECT enr.id,enr.student_id,usr.name,ka.teacher_id,ka.category,ka.area,usr.email,enr.enrollment_date '+
    'FROM teacher_app.student_enrollment enr '+
    'JOIN teacher_app.User usr ON enr.student_id = usr.id '+
    'JOIN teacher_app.Knowledge_Area ka ON enr.teacher_id = ka.teacher_id ' ;*/

/*Get Student by  Professor*/
/*const selectDataStudentsByProfesor= (teacherId) => {
    return db.query(sqlDataStudentsByProfesor + 'WHERE enr.teacher_id = ? ORDER BY enr.teacher_id', [teacherId]);
}*/   

/*const sqlDataStudentsByArea = 'SELECT enr.id,enr.student_id,usr.name,usr.country,usr.city,ka.category,ka.area,usr.email,enr.rating,enr.enrollment_date '+
    'FROM teacher_app.student_enrollment enr '+
    'JOIN teacher_app.User usr ON enr.teacher_id = usr.id '+
    'JOIN teacher_app.Knowledge_Area ka ON enr.teacher_id = ka.teacher_id ';   */


/*Get Student by Area*/
/*const selectDataStudentsByArea= (studenId) => {
    return db.query(sqlDataStudentsByArea + 'WHERE enr.student_id = ?', [studenId]);
} */   

/*const sqlDataUserStatus= 'SELECT * FROM teacher_app.User ';        */

/*Get User Administrator*/
/*const selectDataUserStatus= (status) => {
    return db.query(sqlDataUserStatus + 'WHERE status=?', [status]);
}*/
        
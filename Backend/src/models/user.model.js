const sqlDataProfessorActive = 'SELECT usr.id, usr.name, usr.email, usr.country, usr.city, usr.imageUrl, usr.hourly_rate, ka.teacher_id, ka.area '+
    'FROM teacher_app.User usr '+
    'JOIN teacher_app.knowledge_area ka ON usr.id = ka.teacher_id '+
    'WHERE usr.role = ? '+
    'AND usr.status=?' ;

const sqlDataProfessorByArea = 'SELECT usr.id, usr.name, ka.teacher_id, ka.area FROM teacher_app.User usr ' +
    'JOIN teacher_app.Knowledge_area ka ON usr.id = ka.teacher_id '+
    'WHERE usr.role = ? '+
    'AND usr.status= ? ';

const sqlDataStudentsByProfesor = 'SELECT enr.id,enr.student_id,usr.name,ka.teacher_id,ka.category,ka.area,usr.email,enr.enrollment_date '+
    'FROM teacher_app.student_enrollment enr '+
    'JOIN teacher_app.User usr ON enr.student_id = usr.id '+
    'JOIN teacher_app.Knowledge_Area ka ON enr.teacher_id = ka.teacher_id ' ;

const sqlDataStudentsByArea = 'SELECT enr.id,enr.student_id,usr.name,usr.country,usr.city,ka.category,ka.area,usr.email,enr.rating,enr.enrollment_date '+
    'FROM teacher_app.student_enrollment enr '+
    'JOIN teacher_app.User usr ON enr.teacher_id = usr.id '+
    'JOIN teacher_app.Knowledge_Area ka ON enr.teacher_id = ka.teacher_id ';   
    
const sqlDataStudentsById = 'SELECT usr.id,usr.name,usr.email,usr.country,usr.city,enka.area '+
    'FROM teacher_app.User usr '+
    'JOIN teacher_app.student_enrollment enst ON usr.id = enst.student_id '+
    'JOIN teacher_app.knowledge_area enka ON enst.teacher_id=enka.teacher_id ';     

const sqlDataUserStatus= 'SELECT id,name,email,country,city,imageUrl,hourly_rate,phone,description,role,status '+
    'FROM teacher_app.User ';        

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
    return db.query(sqlDataProfessorActive, ['professor' , 'active']);
}

/*Get All Active Professor Active By Id */
const selectProfessorActiveById= (userId) => {
    return db.query(sqlDataProfessorActive + 'AND usr.id=?', ['professor' , 'active', userId]);
}

/*Get  Professor By Area */
const selectDataProfessorByArea= (userId) => {
    return db.query(sqlDataProfessorByArea + 'AND usr.id=?', ['professor' , 'active', userId]);
}

/*Get Student by  Professor*/
const selectDataStudentsByProfesor= (teacherId) => {
    return db.query(sqlDataStudentsByProfesor + 'WHERE enr.teacher_id = ? ORDER BY enr.teacher_id', [teacherId]);
}

/*Get Student by Area*/
const selectDataStudentsByArea= (studenId) => {
    return db.query(sqlDataStudentsByArea + 'WHERE enr.student_id = ?', [studenId]);
}

/*Get Student by Id*/
const selectDataStudentsById= (studenId) => {
    return db.query(sqlDataStudentsById + 'WHERE usr.role = ? AND enst.student_id= ?', ['student', studenId]);
}

/*Get User Administrator*/
const selectDataUserStatus= (status) => {
    return db.query(sqlDataUserStatus + 'WHERE status=?', [status]);
}


/*insert usuario*/ 
const insertUser = ({username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone}) => {
    return db.query('insert into teacher_app.user(username,password,email,name,postal_code,country,role_id,isActive,longitude,latitude,experience,hourly_rate,image,phone) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [username, password,email, name, postal_code, country, role_id, isActive, longitude, latitude, experience, hourly_rate,image,phone])

}


module.exports = {selectAllUser, selectUserByRol, insertUser, selectProfessorActive,selectProfessorActiveById,selectDataProfessorByArea, selectDataStudentsByProfesor, selectDataStudentsByArea, selectDataStudentsById, selectDataUserStatus}
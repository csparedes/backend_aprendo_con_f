/*Get All Student Enrollment*/
const selectEnrollmentStudent = () => {
    return db.query('SELECT * FROM teacher_app.student_enrollment');
}

/*Get Promedio rating por id*/
/*const selectAverageRatingById= (teacherId) => {
    return db.query('SELECT se.teacher_id, u.name, avg(se.rating) FROM teacher_app.student_enrollment se join teacher_app.User u on se.teacher_id = u.id where se.teacher_id =?', [teacherId]);
}

const selectAverageRating= () => {
    return db.query('SELECT se.teacher_id, u.name, avg(se.rating) FROM teacher_app.student_enrollment se join teacher_app.User u on se.teacher_id = u.id group by se.teacher_id');
}*/


const insertEnrollmentStudent = ({rating,review,student_id,teacher_id,enrollment_date,active}) =>{
    return db.query('INSERT INTO teacher_app.student_enrollment(rating,review,student_id,teacher_id,enrollment_date,active)VALUES(?,?,?,?,now(),1)', 
    [rating,review,student_id,teacher_id,enrollment_date,active]);
}

/*Get All Student Enrollment by  ID*/
const selectEnrollmentStudentById = (id) => {
    return db.query('SELECT * FROM teacher_app.student_enrollment where id = ?', [id]);
}


module.exports = {selectEnrollmentStudent, insertEnrollmentStudent, selectEnrollmentStudentById}
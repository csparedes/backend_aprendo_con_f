/*Get All Student Enrollment*/
const selectEnrollmentStudent = () => {
    return db.query('SELECT * FROM teacher_app.student_enrollment');
}

/*Update Review and Rating*/
const updateFeedbackRating = (enrollmentId, { rating, review }) => {
    return db.query('UPDATE teacher_app.student_enrollment SET rating = ?, review = ? WHERE id=?',
    [rating, review, enrollmentId]);
}


/*Get All Student Enrollment by  ID*/
const selectEnrollmentStudentById = (id) => {
    return db.query('SELECT * FROM teacher_app.student_enrollment where id = ?', [id]);
}



const insertEnrollmentStudent = ({rating,review,student_id,teacher_id,enrollment_date,active}) =>{
    return db.query('INSERT INTO teacher_app.student_enrollment(rating,review,student_id,teacher_id,enrollment_date,active)VALUES(?,?,?,?,now(),1)',
    [rating,review,student_id,teacher_id,enrollment_date,active]);
}

module.exports = {selectEnrollmentStudent, updateFeedbackRating,insertEnrollmentStudent,selectEnrollmentStudentById}
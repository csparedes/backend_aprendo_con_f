const enrollmentModel = require('../models/enrollment.model')

const getAllEnrollmentStudent = async (req, res) => {
    try {
        const [result] = await enrollmentModel.selectEnrollmentStudent();
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
    }
}

//
const updateReviewRating = async (req, res) => {
    const { enrollmentId } = req.params;
    const { rating, review } = req.body;
    try {
        const [result] = await enrollmentModel.updateFeedbackRating(enrollmentId, { rating, review });
        //console.log(result);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}


const createEnrollmentStudent = async (req, res) => {
    try {
        const [result] = await enrollmentModel.insertEnrollmentStudent(req.body);
        const [user] = await enrollmentModel.selectEnrollmentStudentById(result.insertId)
        res.json(user);

    } catch (error) {
        res.json({ fatal: error.message });
    }

}

module.exports = {getAllEnrollmentStudent,updateReviewRating, createEnrollmentStudent}



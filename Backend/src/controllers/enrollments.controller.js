const enrollmentModel = require('../models/enrollment.model')

const getAllEnrollmentStudent = async (req, res) => {
    try {
        const [result] = await enrollmentModel.selectEnrollmentStudent();
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAverageRatingById = async (req, res) => {
    try {
        const { userId } = req.params;
        const [result] = await enrollmentModel.selectAverageRatingById(userId);
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const getAverageRating = async (req, res) => {
    try {        
        const [result] = await enrollmentModel.selectAverageRating();
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

module.exports = {getAllEnrollmentStudent,getAverageRatingById,getAverageRating,createEnrollmentStudent}
const KnowledgeModel = require('../models/knowledge_area.model');

const getAllKnowledge = async (req, res) => {
    try {
        const [result] = await KnowledgeModel.selectKnowledgeArea();
        res.json(result);

    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const createKnowledge = async (req, res) => {
    try {
        const [result] = await KnowledgeModel.insertKnowledgeArea(req.body);
        const [knowledge] = await KnowledgeModel.selectKnowledgeAreaById(result.insertId)
        res.json(knowledge);

    } catch (error) {
        res.json({ fatal: error.message });
    }

}

module.exports = {createKnowledge, getAllKnowledge}
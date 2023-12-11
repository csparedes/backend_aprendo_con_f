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
    console.log('Ingresa al Controller');
    try {
        console.log(req.body);
        
        const [result] = await KnowledgeModel.insertKnowledgeArea(req.body);
        console.log(result);
        
        const [knowledge] = await KnowledgeModel.selectKnowledgeAreaById(result.insertId);
        console.log(knowledge);
        res.json(knowledge);

    } catch (error) {
        console.log(error);
        
        res.json({ fatal: error.message });
    }

}

module.exports = {createKnowledge, getAllKnowledge}
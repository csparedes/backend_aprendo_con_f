const router = require('express').Router();

const KnowledgeController = require('../../controllers/knowledge_area.controller')

router.get('/', KnowledgeController.getAllKnowledge);

router.post('/area', KnowledgeController.createKnowledge);

module.exports = router;

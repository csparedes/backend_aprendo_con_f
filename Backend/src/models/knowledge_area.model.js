const selectKnowledgeArea = () => {
    return db.query('SELECT * FROM teacher_app.knowledge_area ')
}


const insertKnowledgeArea = ({category,description,level,teacher_id,area,active}) =>{
    return db.query('INSERT INTO teacher_app.knowledge_area(category,description,level,teacher_id,area,active) VALUES(?,?,?,?,?,1)', 
    [category,description,level,teacher_id,area,active]);
}

const selectKnowledgeAreaById = (id) => {
    return db.query('SELECT * FROM teacher_app.knowledge_area where id = ?', [id])
}

module.exports = {insertKnowledgeArea, selectKnowledgeAreaById, selectKnowledgeArea}
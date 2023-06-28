// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const projects = await db('projects')
    return projects 
}

async function addProject(project) {
    
    const newProject = db('projects').insert(project)
    
    console.log(newProject)
    return newProject
}


module.exports = {
    getProjects,
    addProject
}
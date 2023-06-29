// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const projects = await db('projects')

    projects.forEach(ele => {
        if (ele.project_completed === 0) {
            ele.project_completed = false
        } else ele.project_completed = true;
    });

    return projects 
}

// helper function for addProject (below)
function getProjectById(id) {
    const project = db('projects').where('project_id', id)
    return project
}

async function addProject(project) { 
    const [newProject] = await db('projects').insert(project)
    const [response] = await getProjectById(newProject)

    if (response.project_completed === 0) {
        response.project_completed = false
    } else response.project_completed = true;

    return response
}


module.exports = {
    getProjects,
    addProject
}
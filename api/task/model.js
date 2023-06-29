// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
        
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', '=', 'p.project_id')
        .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')

    tasks.forEach((ele) => {
        if (ele.task_completed === 0) {
            ele.task_completed = false
        } else ele.task_completed = true;
    })

    return tasks;
}

async function getTasksById(id) {
    const task = db('tasks').where('task_id', id);
    return task;
}

async function addTask(task) {
    const [id] = await db('tasks').insert(task)
    const [response] = await getTasksById(id)

    if (response.task_completed === 0) {
        response.task_completed = false
    } else response.task_completed = true;

    return response
}

module.exports = {
    getTasks,
    addTask
}
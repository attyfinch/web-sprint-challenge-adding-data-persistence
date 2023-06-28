// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const tasks = await db('tasks');
    return tasks;
}

module.exports = {
    getTasks
}
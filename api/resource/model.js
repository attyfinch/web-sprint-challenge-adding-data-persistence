// build your `Resource` model here
const db = require('../../data/dbConfig')


async function getResources() {
    const resources = await db('resources')
    return resources
};


module.exports = {
    getResources
}
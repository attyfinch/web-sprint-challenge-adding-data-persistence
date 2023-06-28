// build your `/api/tasks` router here
const express = require('express')
const router = express.Router();
const Tasks = require('./model')

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;
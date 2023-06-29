// build your `/api/tasks` router here
const express = require('express')
const router = express.Router();
const Tasks = require('./model')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    
    if (!req.body.project_id) {
        res.status(500).json({message: 'project_id is required'})
    }

    Tasks.addTask(req.body)
        .then(task => {
            console.log(task)
            res.status(201).json(task)
        })
        .catch(next)
}) 

router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        message: error.message,
        customMessage: "Something broke in the Projects Router!"
    })
})

module.exports = router;
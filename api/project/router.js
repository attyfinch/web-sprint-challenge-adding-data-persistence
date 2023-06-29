// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
const router = express.Router();

router.get('/', (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
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
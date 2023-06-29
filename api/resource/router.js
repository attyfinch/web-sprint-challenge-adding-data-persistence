// build your `/api/resources` router here
const express = require('express')
const router = express.Router();
const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
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
// build your `/api/resources` router here
const express = require('express')
const router = express.Router();
const Resources = require('./model')

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;
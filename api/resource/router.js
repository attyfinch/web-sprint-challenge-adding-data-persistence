// build your `/api/resources` router here
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "This is the Resources router"})
})

module.exports = router;
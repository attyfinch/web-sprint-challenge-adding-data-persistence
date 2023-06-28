// build your `/api/projects` router here
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "This is the Projects router"})
})

module.exports = router;
// build your `/api/tasks` router here
const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "This is the Tasks router"})
})

module.exports = router;
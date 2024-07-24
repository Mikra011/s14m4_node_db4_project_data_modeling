const express = require('express')
const helpers = require('./recepies-model')

const router = express.Router()

router.use("*", (req, res) => {
    res.json({ api: "works" })
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: "something wrong in router",
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router
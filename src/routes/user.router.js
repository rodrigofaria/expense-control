const express = require('express')
const router = express.Router()
const controller = require('../controller/user.controller')

router.post('/', controller.create)

module.exports = router
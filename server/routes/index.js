const express = require('express')
const router = express.Router()
const user = require('./user')
const photo = require('./photo')
const { authenticate } = require('../middleware/auth')

router.use('/users', user)
router.use(authenticate)
router.use('/photos', photo)

module.exports = router
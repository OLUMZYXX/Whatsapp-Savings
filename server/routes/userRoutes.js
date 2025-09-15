const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// Signup
router.post('/signup', userController.signup)

// Login
router.post('/login', userController.login)

// Fetch user info
router.get('/:id', userController.getUserInfo)

module.exports = router

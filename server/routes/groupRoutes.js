const express = require('express')
const router = express.Router()
const groupController = require('../controllers/groupController')

// Create group
router.post('/create', groupController.createGroup)

// Join group (simple placeholder)
router.post('/join', (req, res) => {
  // Implement join logic here
  res.json({ message: 'Join group endpoint (to be implemented)' })
})

// Log contribution
router.post('/contribute', groupController.logContribution)

// Calculate balances
router.get('/:id/balances', groupController.calculateBalances)

module.exports = router

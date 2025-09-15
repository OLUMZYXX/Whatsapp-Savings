const User = require('../models/User')

// Signup
exports.signup = async (req, res) => {
  try {
    const { username, email, password, whatsapp } = req.body
    const user = new User({ username, email, password, whatsapp })
    await user.save()
    res.status(201).json({ message: 'User registered successfully', user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Login (simple, no hashing for demo)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })
    if (!user) return res.status(401).json({ error: 'Invalid credentials' })
    res.json({ message: 'Login successful', user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Fetch user info
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json()) // bodyParser for JSON

// Mount routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/groups', require('./routes/groupRoutes'))

// MongoDB connection (imported)
const connectDB = require('./config/db')
connectDB()

// User model
const User = require('./models/User')

// Register route to save user info
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const user = new User({ username, email, password })
    await user.save()
    res.status(201).json({ message: 'User registered successfully', user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Example route
app.get('/', (req, res) => {
  res.send('Server is running and connected to MongoDB!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

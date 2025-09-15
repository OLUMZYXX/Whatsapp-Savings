const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  contributions: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
  payoutSchedule: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      payoutDate: { type: Date, required: true },
      amount: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Group', groupSchema)

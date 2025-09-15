const Group = require('../models/Group')

// Create group
exports.createGroup = async (req, res) => {
  try {
    const { members, payoutSchedule } = req.body
    const group = new Group({ members, payoutSchedule })
    await group.save()
    res.status(201).json({ message: 'Group created', group })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Log contribution
exports.logContribution = async (req, res) => {
  try {
    const { groupId, userId, amount } = req.body
    const group = await Group.findById(groupId)
    if (!group) return res.status(404).json({ error: 'Group not found' })
    group.contributions.push({ user: userId, amount })
    await group.save()
    res.json({ message: 'Contribution logged', group })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Calculate balances
exports.calculateBalances = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id).populate(
      'members contributions.user payoutSchedule.user'
    )
    if (!group) return res.status(404).json({ error: 'Group not found' })
    // Simple balance calculation
    const balances = {}
    group.members.forEach((member) => {
      balances[member._id] = 0
    })
    group.contributions.forEach((contribution) => {
      balances[contribution.user._id] += contribution.amount
    })
    res.json({ balances })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

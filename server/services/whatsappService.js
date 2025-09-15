const axios = require('axios')

// Send WhatsApp message via Meta API	extra headers and error handling for production
exports.sendMessage = async (to, message) => {
  try {
    const url = 'https://graph.facebook.com/v19.0/<PHONE_NUMBER_ID>/messages' // Replace <PHONE_NUMBER_ID>
    const token = process.env.WHATSAPP_TOKEN // Store your token in .env
    const data = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: message },
    }
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || error.message)
  }
}

// Handle incoming webhook messages
exports.handleWebhook = (req, res) => {
  // Meta will POST incoming messages here
  const webhookEvent = req.body
  // Process the event as needed
  console.log('Received WhatsApp webhook:', webhookEvent)
  res.sendStatus(200)
}

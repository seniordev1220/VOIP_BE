const messagingService = require('../services/messagingService');
exports.sendSms = async (req, res) => {
  try {
    const { to, message } = req.body;
    const result = await messagingService.sendSms(to, message);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

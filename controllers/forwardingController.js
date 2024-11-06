const forwardingService = require('../services/forwardingService');
exports.setupCallForwarding = async (req, res) => {
  try {
    const { phoneNumber, forwardTo } = req.body;
    const result = await forwardingService.setupCallForwarding(phoneNumber, forwardTo);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

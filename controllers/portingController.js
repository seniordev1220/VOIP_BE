const portingService = require('../services/portingService');
exports.requestPorting = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const portingResult = await portingService.requestPorting(phoneNumber);
    res.json(portingResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

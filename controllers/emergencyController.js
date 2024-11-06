const emergencyService = require('../services/emergencyService');
exports.addEmergencyAddress = async (req, res) => {
  try {
    const { addressDetails } = req.body;
    const result = await emergencyService.addEmergencyAddress(addressDetails);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

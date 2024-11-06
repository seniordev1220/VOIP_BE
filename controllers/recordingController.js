const recordingService = require('../services/recordingService');
exports.enableRecording = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const result = await recordingService.enableRecording(phoneNumber);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

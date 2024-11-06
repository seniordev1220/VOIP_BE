const didService = require('../services/didService');
exports.purchaseDid = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const purchaseResult = await didService.purchaseDid(phoneNumber);
    res.json(purchaseResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

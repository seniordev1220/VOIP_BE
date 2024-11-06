const billingService = require('../services/billingService');
exports.createBillingGroup = async (req, res) => {
  try {
    const { groupName } = req.body;
    const result = await billingService.createBillingGroup(groupName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

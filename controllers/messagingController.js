const messagingService = require('../services/messagingService');

exports.sendMessage = async (req, res) => {
    const provider = req.headers['x-sip-provider'];
    if (!provider) return res.status(400).json({ message: "Provider not specified in headers" });

    try {
        const result = await messagingService.sendMessage(req.body, provider);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

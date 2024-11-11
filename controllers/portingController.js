const portingService = require('../services/portingService');

exports.initiatePort = async (req, res) => {
    const provider = req.headers['x-sip-provider'];
    if (!provider) return res.status(400).json({ message: "Provider not specified in headers" });

    try {
        const result = await portingService.initiatePort(req.body, provider);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.checkPortStatus = async (req, res) => {
    const provider = req.headers['x-sip-provider'];
    if (!provider) return res.status(400).json({ message: "Provider not specified in headers" });

    try {
        const result = await portingService.checkPortStatus(req.params.portId, provider);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

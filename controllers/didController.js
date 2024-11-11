const didService = require('../services/didService');

exports.purchaseDid = async (req, res) => {
    const provider = req.headers['x-sip-provider'];
    if (!provider) return res.status(400).json({ message: "Provider not specified in headers" });

    try {
        const didData = await didService.purchaseDid(req.body, provider);
        res.status(201).json(didData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDids = async (req, res) => {
    const provider = req.headers['x-sip-provider'];
    if (!provider) return res.status(400).json({ message: "Provider not specified in headers" });

    try {
        const dids = await didService.getDids(provider);
        res.status(200).json(dids);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

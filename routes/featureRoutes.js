const express = require('express');
const router = express.Router();
const featureController = require('../controllers/featureController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/forward', authMiddleware, featureController.activateCallForwarding);

module.exports = router;

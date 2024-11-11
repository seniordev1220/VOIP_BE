const express = require('express');
const router = express.Router();
const messagingController = require('../controllers/messagingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/send', authMiddleware, messagingController.sendMessage);

module.exports = router;

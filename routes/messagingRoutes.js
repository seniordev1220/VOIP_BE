const express = require('express');
const router = express.Router();
const messagingController = require('../controllers/messagingController');
// Route for sending SMS
router.post('/send-sms', messagingController.sendSms);
module.exports = router;

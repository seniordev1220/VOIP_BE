const express = require('express');
const router = express.Router();
const forwardingController = require('../controllers/forwardingController');
// Route to set up call forwarding
router.post('/setup', forwardingController.setupCallForwarding);
module.exports = router;

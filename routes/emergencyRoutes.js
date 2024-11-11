const express = require('express');
const router = express.Router();
const emergencyController = require('../controllers/emergencyController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/activate', authMiddleware, emergencyController.activateEmergencyService);
router.post('/deactivate', authMiddleware, emergencyController.deactivateEmergencyService);

module.exports = router;

const express = require('express');
const router = express.Router();
const emergencyController = require('../controllers/emergencyController');
// Route for adding emergency address
router.post('/add-address', emergencyController.addEmergencyAddress);
module.exports = router;

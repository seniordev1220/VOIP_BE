const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');
// Route to create a billing group
router.post('/create-group', billingController.createBillingGroup);
module.exports = router;

const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/group', authMiddleware, billingController.createBillingGroup);

module.exports = router;

const express = require('express');
const router = express.Router();
const didController = require('../controllers/didController');
// Define DID routes
router.post('/purchase', didController.purchaseDid);
module.exports = router;

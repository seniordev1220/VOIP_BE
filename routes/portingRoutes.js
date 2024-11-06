const express = require('express');
const router = express.Router();
const portingController = require('../controllers/portingController');
// Define porting routes
router.post('/request', portingController.requestPorting);
module.exports = router;

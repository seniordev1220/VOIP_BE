const express = require('express');
const router = express.Router();
const didController = require('../controllers/didController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/purchase', authMiddleware, didController.purchaseDid);
router.get('/', authMiddleware, didController.getDids);

module.exports = router;

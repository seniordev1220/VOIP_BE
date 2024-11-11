const express = require('express');
const router = express.Router();
const recordingController = require('../controllers/recordingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/activate', authMiddleware, recordingController.activateRecording);

module.exports = router;

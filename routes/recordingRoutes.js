const express = require('express');
const router = express.Router();
const recordingController = require('../controllers/recordingController');
// Route to enable call recording
router.post('/enable', recordingController.enableRecording);
module.exports = router;

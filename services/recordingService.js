const twilioClient = require('../config/twilioConfig');
exports.enableRecording = async (phoneNumber) => {
  try {
    const updatedNumber = await twilioClient.incomingPhoneNumbers(phoneNumber).update({
      voiceUrl: `https://myapp.com/record-call`,
    });
    return updatedNumber;
  } catch (error) {
    throw new Error('Failed to enable recording: ' + error.message);
  }
};

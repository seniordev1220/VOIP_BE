const twilioClient = require('../config/twilioConfig');
exports.setupCallForwarding = async (phoneNumber, forwardTo) => {
  try {
    const updatedNumber = await twilioClient.incomingPhoneNumbers(phoneNumber).update({
      voiceUrl: `https://myapp.com/forward-call?to=${forwardTo}`,
    });
    return updatedNumber;
  } catch (error) {
    throw new Error('Failed to set up call forwarding: ' + error.message);
  }
};

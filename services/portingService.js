const twilioClient = require('../config/twilioConfig');
exports.requestPorting = async (phoneNumber) => {
  try {
    // Example Twilio API call for porting
    const portingRequest = await twilioClient.porting.v1.portRequests.create({
      phoneNumber: phoneNumber,
      // Additional parameters as needed
    });
    return portingRequest;
  } catch (error) {
    throw new Error('Failed to create porting request: ' + error.message);
  }
};

const twilioClient = require('../config/twilioConfig');
exports.purchaseDid = async (phoneNumber) => {
  try {
    // Example Twilio API call for purchasing a DID
    const purchasedNumber = await twilioClient.incomingPhoneNumbers.create({
      phoneNumber: phoneNumber,
      // Additional parameters as needed
    });
    return purchasedNumber;
  } catch (error) {
    throw new Error('Failed to purchase DID: ' + error.message);
  }
};

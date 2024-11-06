const twilioClient = require('../config/twilioConfig');
exports.addEmergencyAddress = async (addressDetails) => {
  try {
    // Twilio API call to add an emergency address
    const address = await twilioClient.addresses.create(addressDetails);
    return address;
  } catch (error) {
    throw new Error('Failed to add emergency address: ' + error.message);
  }
};

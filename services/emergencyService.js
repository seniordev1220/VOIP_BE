const twilioClient = require('../config/twilioConfig');
const telnyxClient = require('../config/telnyxConfig');

exports.activateEmergencyService = async (data, provider) => {
    const { did } = data;
    if (provider === 'Twilio') {
        // Twilio-specific API call for activating emergency services
        return await twilioClient.emergencyAddresses.create({ did });
    } else if (provider === 'Telnyx') {
        // Telnyx-specific API call for activating emergency services
        return await telnyxClient.emergencyAddresses.create({ did });
    }
    throw new Error('Invalid provider specified');
};

exports.deactivateEmergencyService = async (data, provider) => {
    const { did } = data;
    if (provider === 'Twilio') {
        // Twilio-specific API call for deactivating emergency services
        return await twilioClient.emergencyAddresses.remove(did);
    } else if (provider === 'Telnyx') {
        // Telnyx-specific API call for deactivating emergency services
        return await telnyxClient.emergencyAddresses.remove(did);
    }
    throw new Error('Invalid provider specified');
};

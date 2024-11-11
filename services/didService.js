const twilioClient = require('../config/twilioConfig');
const telnyxClient = require('../config/telnyxConfig');

exports.purchaseDid = async (data, provider) => {
    const { phoneNumber } = data;
    if (provider === 'Twilio') {
        return await twilioClient.incomingPhoneNumbers.create({ phoneNumber });
    } else if (provider === 'Telnyx') {
        return await telnyxClient.phoneNumbers.purchasePhoneNumber({ phoneNumber });
    }
    throw new Error('Invalid provider specified');
};

exports.getDids = async (provider) => {
    if (provider === 'Twilio') {
        return await twilioClient.incomingPhoneNumbers.list();
    } else if (provider === 'Telnyx') {
        return await telnyxClient.phoneNumbers.listPhoneNumbers();
    }
    throw new Error('Invalid provider specified');
};

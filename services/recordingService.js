const twilioClient = require('../config/twilioConfig');
const telnyxClient = require('../config/telnyxConfig');

exports.activateRecording = async (data, provider) => {
    const { callSid } = data;
    if (provider === 'Twilio') {
        return await twilioClient.calls(callSid).recordings.create();
    } else if (provider === 'Telnyx') {
        return await telnyxClient.calls(callSid).recordings.create();
    }
    throw new Error('Invalid provider specified');
};

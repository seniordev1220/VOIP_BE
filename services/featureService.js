const twilioClient = require('../config/twilioConfig');
const telnyxClient = require('../config/telnyxConfig');

exports.activateCallForwarding = async (data, provider) => {
    const { did, forwardTo } = data;
    if (provider === 'Twilio') {
        // Set up call forwarding on Twilio
        return await twilioClient.calls.create({
            to: forwardTo,
            from: did,
            url: 'https://example.com/forward' // URL where Twilio fetches call forwarding instructions
        });
    } else if (provider === 'Telnyx') {
        // Set up call forwarding on Telnyx
        return await telnyxClient.calls.create({
            to: forwardTo,
            from: did,
            connection_id: 'your_connection_id' // Replace with your Telnyx connection ID
        });
    }
    throw new Error('Invalid provider specified');
};

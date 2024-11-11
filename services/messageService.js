const twilioClient = require('../config/twilioConfig');
const telnyxClient = require('../config/telnyxConfig');

exports.sendMessage = async (data, provider) => {
    const { to, from, message, type } = data; // type can be SMS or WhatsApp
    if (provider === 'Twilio') {
        return await twilioClient.messages.create({
            to,
            from,
            body: message,
            messagingServiceSid: type === 'WhatsApp' ? 'whatsapp:' + from : from,
        });
    } else if (provider === 'Telnyx') {
        return await telnyxClient.messages.create({
            to,
            from,
            text: message,
        });
    }
    throw new Error('Invalid provider specified');
};

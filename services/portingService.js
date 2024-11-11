const twilioClient = require('../config/twilioConfig');
const telnyxClient = require('../config/telnyxConfig');

exports.initiatePort = async (data, provider) => {
    if (provider === 'Twilio') {
        return await twilioClient.porting.v1.portOrders.create(data);
    } else if (provider === 'Telnyx') {
        return await telnyxClient.portingOrders.create(data);
    }
    throw new Error('Invalid provider specified');
};

exports.checkPortStatus = async (portId, provider) => {
    if (provider === 'Twilio') {
        return await twilioClient.porting.v1.portOrders(portId).fetch();
    } else if (provider === 'Telnyx') {
        return await telnyxClient.portingOrders.retrieve(portId);
    }
    throw new Error('Invalid provider specified');
};

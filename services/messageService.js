const twilioClient = require('../config/twilioConfig');
exports.sendSms = async (to, message) => {
  try {
    const sms = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
      to: to,
    });
    return sms;
  } catch (error) {
    throw new Error('Failed to send SMS: ' + error.message);
  }
};

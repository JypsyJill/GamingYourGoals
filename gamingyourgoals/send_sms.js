require('dotenv').config();
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, MY_PHONE_NUMBER } = process.env;

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN


const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
      from: TWILIO_PHONE_NUMBER,
      to: MY_PHONE_NUMBER,
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
   })
  .then((message) => console.log(message.sid));
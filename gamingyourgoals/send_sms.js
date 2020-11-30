const accountSid = process.env.ACe204fb33fbf49f5ed7537dad0a774581;
const authToken = process.env.4c36369864e970901405c5e7d1c20251;
const client = require 'twilio' (accountSid, authToken);

client.messages
  .create({
    to: '+18016964560',
    from: '+16027802946',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then(message => console.log(message.sid));
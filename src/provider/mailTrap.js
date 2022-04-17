const nodemailer = require('nodemailer');
require('dotenv').config();

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

const sendMessage = (clientEmail, subject, text) => {
  const message = transport.sendMail({
    from: 'sender@server.com',
    to: clientEmail,
    subject: subject,
    text: text,
  });

  return message;
};

module.exports = sendMessage;

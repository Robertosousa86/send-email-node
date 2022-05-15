require('dotenv').config();
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

const sendMessage = (obj) => {
  const message = transport.sendMail({
    from: '<sender@server.com>',
    to: obj.email,
    subject: obj.titulo,
    text: obj.texto,
  });

  return message;
};

module.exports = sendMessage;

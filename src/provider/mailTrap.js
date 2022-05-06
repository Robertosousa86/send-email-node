const nodemailer = require('nodemailer');
require('dotenv').config();

const ejs = require('ejs');

const transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

const sendMessage = async (email, subject, text) => {
  await ejs.renderFile(__dirname + '/../views/pages/index.ejs', (err, data) => {
    if (err) return res.status(400).send({ message: err });

    const message = transport.sendMail({
      from: '<sender@server.com>',
      to: email,
      subject: subject,
      text: text,
      html: data,
    });

    return message;
  });
};

module.exports = sendMessage;

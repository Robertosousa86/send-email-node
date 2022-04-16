const message = require('../provider/mailTrap');

class sendEmail {
  async postEmail(req, res) {
    try {
      await message;

      return res.status(200).send('Email enviado com sucesso!');
    } catch (err) {
      return res.status(400).send({ message: err });
    }
  }
}

module.exports = sendEmail;

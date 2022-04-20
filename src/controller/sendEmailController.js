const sendMessage = require('../provider/mailTrap');

class sendEmail {
  async postEmail(req, res) {
    try {
      const { email, subject, text } = req.body;

      await sendMessage(email, subject, text);

      return res.status(200).send({ message: 'Email enviado com sucesso!' });
    } catch (err) {
      return res.status(400).send({ message: 'Erro ao enviar Email.' });
    }
  }
}

module.exports = sendEmail;

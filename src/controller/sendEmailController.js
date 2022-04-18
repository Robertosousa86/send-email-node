const sendMessage = require('../provider/mailTrap');

class sendEmail {
  async postEmail(req, res) {
    try {
      const { clientEmail, subject, text } = req.body;

      await sendMessage(clientEmail, subject, text);

      return res.status(200).send({ message: 'Email enviado com sucesso!' });
    } catch (err) {
      return res.status(400).send({ message: 'Erro ao enviar email' });
    }
  }
}

module.exports = sendEmail;

const sendMessage = require('../provider/mailTrap');
const emptyEmailField = require('../error/emptyEmailField');

class SendEmail {
  postEmail(req, res) {
    try {
      const { email, subject, text } = req.body;

      sendMessage(email, subject, text);

      return res.status(200).send({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      return emptyEmailField(res, error);
    }
  }
}

module.exports = SendEmail;

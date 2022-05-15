const sendMessage = require('../provider/mailTrap');

class SendEmail {
  async postEmail(req, res) {
    const objRequest = {
      email: req.body.email,
      titulo: req.body.subject,
      texto: req.body.text,
    };
    try {
      for (const key in objRequest) {
        if (!objRequest[key])
          return res.status(400).json({ message: `Preencha o campo ${key}` });
      }

      await sendMessage(objRequest);

      return res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = SendEmail;

class sendEmail {
  postEmail(req, res) {
    try {
      return res.status(200).send('Um simples teste de requisição.');
    } catch (err) {
      return res.status(400).send({ message: err });
    }
  }
}

module.exports = sendEmail;

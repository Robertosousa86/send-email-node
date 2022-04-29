const express = require('express');

const SendEmail = require('../controller/SendEmail');

const router = express.Router();

const sendEmail = new SendEmail();

router.post('/', (req, res) => sendEmail.postEmail(req, res));

module.exports = router;

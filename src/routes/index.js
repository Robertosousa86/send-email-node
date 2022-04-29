const express = require('express');

const sendEmail = require('./sendEmail');

const router = express.Router();

router.use('/', sendEmail);

module.exports = router;

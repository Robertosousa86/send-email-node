const express = require('express');

const sendEmailRoute = require('./sendEmail');

const router = express.Router();

router.use('/', sendEmailRoute);

module.exports = router;

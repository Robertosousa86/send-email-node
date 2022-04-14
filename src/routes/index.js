const express = require('express');
const router = require('./sendEmail');

const sendEmailRoute = require('./sendEmail');

router.use('/', sendEmailRoute);

module.exports = router;

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const configureExpress = () => {
  return app;
};

module.exports = () => {
  const app = configureExpress();

  return app;
};

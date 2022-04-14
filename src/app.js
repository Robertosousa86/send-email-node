const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const configureExpress = () => {
  app.use('/', routes);

  return app;
};

module.exports = () => {
  const app = configureExpress();

  return app;
};

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.set('views', './src/views/pages');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.use(cors());
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

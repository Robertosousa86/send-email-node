const setupApp = require('./app');
require('dotenv').config();

const app = setupApp();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App running at Port: ${PORT}`);
});

const setupApp = require('./app');
require('dotenv').config();

const app = setupApp();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App running at http:localhost:${PORT}`);
});

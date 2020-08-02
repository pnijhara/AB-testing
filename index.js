require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./src/rest/routes');
const models = require('./src/models');

/*
This is used to configure express
to parse request body as JSON
*/
app.use(bodyParser.json());

models.sequelize
  .sync()
  .then(() => {
    app.use(api);

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`Server started at ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

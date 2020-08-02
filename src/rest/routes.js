const { Router } = require('express');
const { createABTest } = require('./abtestControler');
const api = Router();

api.get('/ping', function (req, res) {
  res.json({ pong: 'AB-testing' });
});

api.post('/abtest', createABTest);

module.exports = api;

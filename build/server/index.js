'use strict';

var _cors = _interopRequireDefault(require('cors'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-unused-vars: 1 */
const path = require('path');

const express = require('express');

const app = express();

const http = require('http').Server(app);

const {
  PORT
} = require('../config'); // Allow cross-domain requests


app.use((0, _cors.default)()); // Serve files from public directory
// app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../../dist'))); // app.get('/', (req, res) => {
//   console.log('HEY',path.join(__dirname,'../dist/index.html'))
//   res.sendFile(path.join(__dirname,'../dist/index.html'));
// })
// Error handling middleware

app.use((err, req, res, next) => {
  console.log('Request reached error handling', err);
  res.sendStatus(err.status || 500);
});
http.listen(PORT, () => console.log(`The server is listening closely on port ${PORT}...`));
module.exports = http;
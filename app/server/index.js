/* eslint no-unused-vars: 1 */

import cors from 'cors';
import path from 'path';
import express from 'express';

const app = express();

const { PORT } = require('../config');

// Allow cross-domain requests
app.use(cors());

// Serve files from public directory
// app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../../dist')));

// app.get('/', (req, res) => {
//   console.log('HEY',path.join(__dirname,'../dist/index.html'))
//   res.sendFile(path.join(__dirname,'../dist/index.html'));
// })

// Error handling middleware
app.use((err, req, res, next) => {
  console.log('Request reached error handling', err);
  res.sendStatus(err.status || 500);
});

app.listen(PORT, () =>
  console.log(`The server is listening closely on port ${PORT}...`)
);

module.exports = app;

/* eslint no-unused-vars: 1 */

import cors from 'cors';
import {join} from 'path';
import express from 'express';

const app = express();

const { PORT } = require('../config');

// Allow cross-domain requests
app.use(cors());

// Use EJS as temnplating engine
// Useful for rendering React code on the server
app.set('view engine', 'ejs');

const webpackOutputDir = join(__dirname, '../../dist');

app.get('/', (req, res) => {
  res.render(join(webpackOutputDir, 'index.ejs'), {moose: 'MOOOSEE'});
});

// Serve bundles as static files
app.use(express.static(webpackOutputDir));

// Error handling middleware
app.use((err, req, res, next) => {
  console.log('Request reached error handling', err);
  res.sendStatus(err.status || 500);
});

app.listen(PORT, () =>
  console.log(`The server is listening closely on port ${PORT}...`)
);

module.exports = app;

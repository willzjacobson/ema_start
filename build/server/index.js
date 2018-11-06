'use strict';

var _cors = _interopRequireDefault(require('cors'));

var _path = require('path');

var _express = _interopRequireDefault(require('express'));

var _server = _interopRequireDefault(require('../renderers/server'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const app = (0, _express.default)();

const { PORT } = require('../config'); // Allow cross-domain requests

app.use((0, _cors.default)()); // Use EJS as temnplating engine (useful for rendering React code on the server)

app.set('view engine', 'ejs');
const webpackOutputDir = (0, _path.join)(__dirname, '../../dist');
app.get('/', async (req, res) => {
  const initialContent = await (0, _server.default)();
  res.render((0, _path.join)(webpackOutputDir, 'index.ejs'), {
    initialContent,
  });
}); // Serve bundles as static files

app.use(_express.default.static(webpackOutputDir)); // Error handling middleware

app.use((err, req, res, next) => {
  console.log('Request reached error handling', err);
  res.sendStatus(err.status || 500);
});
app.listen(PORT, () =>
  console.log(`The server is listening closely on port ${PORT}...`)
);

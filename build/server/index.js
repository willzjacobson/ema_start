'use strict';

var _cors = _interopRequireDefault(require('cors'));

var _path = require('path');

var _express = _interopRequireDefault(require('express'));

var _server = _interopRequireDefault(require('../renderers/server'));

var _config = require('../config');

var _routes = _interopRequireDefault(require('./routes'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const app = (0, _express.default)();
// Allow cross-domain requests
app.use((0, _cors.default)()); // Serve bundles as static files

const webpackOutputDir = (0, _path.join)(__dirname, '../../dist');
app.use(_express.default.static(webpackOutputDir));
app.use('/api', _routes.default); // Use EJS as templating engine
// (makes it easy to inject pre-rendered React code into the markup)

app.set('view engine', 'ejs');
app.get('*', async (req, res) => {
  // Markup to send preloaded to client (this is what server rendering is)
  const initialContent = await (0, _server.default)(); // The pre-rendered markup is injected into the EJS template and sent to the client,
  // So the client does not have to fetch it AFTER receiving the initial markup

  res.render((0, _path.join)(webpackOutputDir, 'index.ejs'), {
    initialContent,
  });
}); // Error handling middleware

app.use((err, req, res, next) => {
  console.log('Request reached error handling', err);
  res.sendStatus(err.status || 500);
});
app.listen(_config.PORT, () =>
  console.log(`The server is listening closely on port ${_config.PORT}...`)
);

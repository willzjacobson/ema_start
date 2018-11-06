"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = app => {
  app.use(_bodyParser.default.json({
    strict: false
  }));
  app.use(_bodyParser.default.urlencoded({
    extended: true
  }));
};
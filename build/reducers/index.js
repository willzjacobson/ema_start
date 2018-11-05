"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _source = _interopRequireDefault(require("./source"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// RENAME ACCORDINGLY
const rootReducer = (0, _redux.combineReducers)({
  source: _source.default
});
var _default = rootReducer;
exports.default = _default;
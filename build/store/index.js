"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxImmutableStateInvariant = _interopRequireDefault(require("redux-immutable-state-invariant"));

var _config = require("../config");

var _reducers = _interopRequireDefault(require("../reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const middleware = [_reduxThunk.default];
if (_config.NODE_ENV === 'development') middleware.push((0, _reduxImmutableStateInvariant.default)(), _reduxLogger.default);

function configureStore(initialState) {
  return (0, _redux.createStore)(_reducers.default, initialState, (0, _redux.applyMiddleware)(...middleware));
}
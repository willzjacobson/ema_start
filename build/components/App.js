"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _Header = _interopRequireDefault(require("./Header"));

var _Table = _interopRequireDefault(require("./Table"));

var sourceActions = _interopRequireWildcard(require("../actions/source"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class App extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "container"
    }, _react.default.createElement(_Header.default, null), _react.default.createElement(_Table.default, null));
  }

}

function mapDispatchToProps(dispatch) {
  return {
    sourceActions: (0, _redux.bindActionCreators)(sourceActions, dispatch)
  };
}

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(App);

exports.default = _default;
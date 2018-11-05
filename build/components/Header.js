"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Header = () => {
  return _react.default.createElement("h1", {
    style: styles.headerStyle
  }, "Dazboard");
};

const styles = {
  headerStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '32px'
  }
};
var _default = Header;
exports.default = _default;
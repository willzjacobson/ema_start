"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var sourceActions = _interopRequireWildcard(require("../actions/source"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Table extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleFetchSourceData = (service, slot) => {
      // this.props.sourceActions.fetchSource(service, slot);
      console.log('fetchSource');
    }, _temp;
  }

  render() {
    const s = this.props.source;
    const rows = [];
    const firstRow = [];
    firstRow.push(_react.default.createElement("th", null, "service"));
    const tableHeads = [(0, _reactHtmlParser.default)('<th>service</th>')];
    let firstRound = true;

    for (let service in s) {
      const cells = [];
      if (typeof s[service] !== 'object') continue;

      for (let slot in s[service]) {
        cells.push(_react.default.createElement(_TableCell.default, {
          key: slot,
          service: service,
          handleFetchSourceData: this.handleFetchSourceData,
          slot: slot,
          sourceData: s[service][slot]
        }));
        if (firstRound) tableHeads.push(_react.default.createElement("th", {
          key: slot
        }, slot));
      }

      rows.push(_react.default.createElement("tr", {
        key: service
      }, _react.default.createElement("td", null, service), cells));
      firstRound = false;
    }

    return _react.default.createElement("div", null, _react.default.createElement("table", {
      className: "table table-hover"
    }, _react.default.createElement("thead", null, _react.default.createElement("tr", {
      style: styles.titleStyle
    }, tableHeads)), _react.default.createElement("tbody", null, rows)));
  }

}

const styles = {
  titleStyle: {
    // backgroundColor: '#DCDCDC',
    // textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px'
  }
};

function mapStateToProps(state) {
  return {
    source: state.source
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sourceActions: (0, _redux.bindActionCreators)(sourceActions, dispatch)
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Table);

exports.default = _default;
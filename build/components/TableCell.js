'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '25%',
    bottom: '25%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class TableCell extends _react.Component {
  constructor(...args) {
    var _temp;

    return (
      (_temp = super(...args)),
      (this.state = {
        modalIsOpen: false,
      }),
      (this.openModal = () => {
        this.setState({
          modalIsOpen: true,
        });
      }),
      (this.closeModal = () => {
        this.setState({
          modalIsOpen: false,
        });
      }),
      (this.setButtonStyle = data => {
        let buttonStyle = {
          backgroundColor: '#D58A2A',
          border: 'none',
          color: 'white',
          width: '100px',
          height: '30px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '14px',
          borderRadius: '5px',
        }; // Set different colors based on branches

        if (data && data.properties) {
          if (
            data.properties.branch === 'master' ||
            data.properties.branch === 'qa' ||
            data.properties.branch === 'qa2' ||
            data.properties.branch === 'integration'
          ) {
            buttonStyle.backgroundColor = '#4CAF50';
          } else if (data.properties.repoUrl === 'VSTSRM') {
            buttonStyle.backgroundColor = '#3340C1';
          }
        }

        return buttonStyle;
      }),
      _temp
    );
  }

  componentDidMount() {
    const { service, handleFetchSourceData, slot } = this.props;
    handleFetchSourceData(service, slot);
  }

  render() {
    const { service, sourceData, error } = this.props;
    let display;

    if (error) {
      return _react.default.createElement(
        'td',
        null,
        _react.default.createElement('p', null, 'error')
      );
    }

    if (sourceData === null || !sourceData || !sourceData.properties) {
      return _react.default.createElement('td', null, '...');
    }

    if (!sourceData.properties.branch) {
      display = sourceData.properties.repoUrl;
    } else {
      display = sourceData.properties.branch;
    }

    return _react.default.createElement(
      'td',
      {
        style: styles.cellStyle,
      },
      _react.default.createElement(
        'button',
        {
          style: this.setButtonStyle(sourceData),
          onClick: this.openModal,
        },
        display
      )
    );
  }
}

const styles = {
  cellStyle: {
    // height: '6px',
    paddingTop: '1px',
    paddingBottom: '1px',
  },
};
var _default = TableCell;
exports.default = _default;

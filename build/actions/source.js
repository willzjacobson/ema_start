'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.beginFetchSource = beginFetchSource;
exports.fetchSourceSuccess = fetchSourceSuccess;
exports.fetchSourceError = fetchSourceError;
exports.fetchSource = fetchSource;

var types = _interopRequireWildcard(require('./action-types'));

var _axios = _interopRequireDefault(require('axios'));

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function beginFetchSource(webapp, slot) {
  return {
    type: types.FETCH_SOURCE,
    webapp,
    slot
  };
}

function fetchSourceSuccess(webapp, slot, data) {
  return {
    type: types.FETCH_SOURCE_SUCCESS,
    sourceData: data,
    service: webapp,
    slot
  };
}

function fetchSourceError(webapp, slot, error) {
  return {
    type: types.FETCH_SOURCE_ERROR,
    service: webapp,
    slot,
    error
  };
}

function fetchSource(webapp, slot) {
  return async dispatch => {
    dispatch(beginFetchSource());

    try {
      const {
        data
      } = await _axios.default.get(`${_config.ROUTE}/webapp/${webapp}/slot/${slot}/source`);
      dispatch(fetchSourceSuccess(webapp, slot, data));
    } catch (err) {
      dispatch(fetchSourceError(webapp, slot, err));
    }
  };
}
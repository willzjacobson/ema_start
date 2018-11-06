'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = source;

var types = _interopRequireWildcard(require('../actions/action-types'));

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

const initialState = require('../dummyData');

function source(state = initialState, action) {
  const { service, slot, sourceData, error } = action;

  switch (action.type) {
    case types.FETCH_SOURCE_SUCCESS:
      return {
        ...state,
        [service]: {
          ...state[service],
          [slot]: sourceData,
        },
      };

    case types.FETCH_SOURCE_ERROR:
      return {
        ...state,
        [service]: {
          ...state[service],
          [slot]: {
            ...state[service][slot],
            error,
          },
        },
      };

    default:
      return state;
  }
}

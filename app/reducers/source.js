import * as types from '../actions/action-types';

const initialState = require('../dummyData');

export default function source(state = initialState, action) {
  const { service, slot, sourceData, error} = action;
  switch (action.type) {
    case types.FETCH_SOURCE_SUCCESS:
      return {
        ...state,
        [service]: {
          ...state[service],
            [slot]: sourceData
        }
      };
    case types.FETCH_SOURCE_ERROR:
      return {
        ...state,
        [service]: {
          ...state[service],
            [slot]: {
              ...state[service][slot],
              error
          }
        }
      };
    default:
      return state;
  }
};

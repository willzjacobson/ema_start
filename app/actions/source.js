import * as types from './action-types';
import axios from 'axios';
import { ROUTE } from '../config';

export function beginFetchSource(webapp, slot) {
  return {
    type: types.FETCH_SOURCE,
    webapp,
    slot
  };
}

export function fetchSourceSuccess(webapp, slot, data) {
  return {
    type: types.FETCH_SOURCE_SUCCESS,
    sourceData: data,
    service: webapp,
    slot
  };
}

export function fetchSourceError(webapp, slot, error) {
  return {
    type: types.FETCH_SOURCE_ERROR,
    service: webapp,
    slot,
    error,
  };
}

export function fetchSource(webapp, slot) {
  return async dispatch => {
    dispatch(beginFetchSource());

    try {
      const {
        data
      } = await axios.get(
        `${ROUTE}/webapp/${webapp}/slot/${slot}/source`
      );
      dispatch(fetchSourceSuccess(webapp, slot, data));
    } catch (err) {
      dispatch(fetchSourceError(webapp, slot, err));
    }
  };
}

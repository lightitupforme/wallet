import { combineReducers } from 'redux';

import * as constants from '../constants';

const authenticated = (state = false, action) => {
  switch (action.type) {
    case constants.types.AUTHENTICATION_LOGIN_SUCCESS:
      return true;
    case constants.types.AUTHENTICATION_LOGIN_REQUEST:
    case constants.types.AUTHENTICATION_LOGIN_FAILURE:
      return false;
    default:
      return state;
  }
};

const authenticating = (state = false, action) => {
  switch (action.type) {
    case constants.types.AUTHENTICATION_LOGIN_REQUEST:
      return true;
    case constants.types.AUTHENTICATION_LOGIN_SUCCESS:
    case constants.types.AUTHENTICATION_LOGIN_FAILURE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ authenticated, authenticating });

export const getAuthentication = state => state.authentication.authenticated;

export const getAuthenticating = state => state.authentication.authenticating;

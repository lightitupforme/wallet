import * as constants from '../constants';

const authentication = (state = false, action) => {
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

export default authentication;

export const getAuthentication = state => state.authentication;

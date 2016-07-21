import * as constants from '../constants';

const configuration = (state = {
  host: '',
  port: '',
  username: '',
  password: '',
  ssl: false,
}, action) => {
  switch (action.type) {
    case constants.types.STORE_CREDENTIALS_SUCCESS:
      return Object.assign({}, action.credentials);
    default:
      return state;
  }
};

export default configuration;

export const getCredentials = state => state.configuration;

const configuration = (state = {
  host: '',
  port: '',
  username: '',
  password: '',
  ssl: false,
}, action) => {
  switch (action.type) {
    case 'STORE_CREDENTIALS':
      return Object.assign({}, action.credentials);
    default:
      return state;
  }
};

export default configuration;

export const getCredentials = state => state.configuration;

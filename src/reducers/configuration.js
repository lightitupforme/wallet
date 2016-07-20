const configuration = (state = { username: '', password: '' }, action) => {
  switch (action.type) {
    case 'STORE_CREDENTIALS':
      return Object.assign({}, action.credentials);
    default:
      return state;
  }
};

export default configuration;

export const getUsername = state => state.configuration.username;

export const getPassword = state => state.configuration.password;

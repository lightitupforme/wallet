const authentication = (state = false, action) => {
  switch (action.type) {
    case 'AUTHENTICATION_SUCCESS':
      return true;
    case 'AUTHENTICATION_FAILED':
      return false;
    default:
      return state;
  }
};

export default authentication;

export const getAuthentication = state => state.authentication;

import * as api from '../api';

export const storeCredentials = (username, password) => ({
  type: 'STORE_CREDENTIALS',
  credentials: { username, password },
});

export const getBalance = () => (dispatch, getState) => {
  const username = getState().configuration.username;
  const password = getState().configuration.password;

  return api.getBalance(username, password)
    .then(response => {
      dispatch({
        type: 'GET_BALANCE',
        balance: response.result,
      });
    });
};

export const addAddress = () => ({
  type: 'ADD_ADDRESS',
  address: {
    address: 'asdf',
    createdAt: new Date(),
  },
});

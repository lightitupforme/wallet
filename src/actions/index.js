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

export const getAddresses = () => (dispatch, getState) => {
  const username = getState().configuration.username;
  const password = getState().configuration.password;

  return api.getAddresses(username, password)
    .then(response => {
      dispatch({
        type: 'GET_ADDRESSES',
        addresses: response.result,
      });
    });
};

export const addAddress = () => (dispatch, getState) => {
  const username = getState().configuration.username;
  const password = getState().configuration.password;

  return api.addAddress(username, password)
    .then(response => {
      dispatch({
        type: 'ADD_ADDRESS',
        address: {
          address: response.result,
          new: true,
        },
      });
    });
};

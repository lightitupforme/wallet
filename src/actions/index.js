import * as api from '../api';

export const testCredentials = credentials => dispatch =>
  api.getHelp(credentials).then(() => {
    dispatch({ type: 'AUTHENTICATION_SUCCESS' });
  }).catch(() => {
    dispatch({ type: 'AUTHENTICATION_FAILED' });
  });

export const storeCredentials = credentials => ({
  credentials,
  type: 'STORE_CREDENTIALS',
});

export const getBalance = () => (dispatch, getState) =>
  api.getBalance(getState().configuration).then(response => {
    dispatch({
      type: 'GET_BALANCE',
      balance: response.result,
    });
  });

export const getAddresses = () => (dispatch, getState) =>
  api.getAddresses(getState().configuration).then(response => {
    dispatch({
      type: 'GET_ADDRESSES',
      addresses: response.result,
    });
  });

export const addAddress = () => (dispatch, getState) =>
  api.addAddress(getState().configuration).then(response => {
    dispatch({
      type: 'ADD_ADDRESS',
      address: {
        address: response.result,
        new: true,
      },
    });
  });

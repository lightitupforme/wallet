import * as constants from '../constants';
import * as api from '../api';

export const testCredentials = credentials => dispatch => {
  dispatch({ type: constants.types.AUTHENTICATION_LOGIN_REQUEST });

  return api.getHelp(credentials).then(() => {
    dispatch({ type: constants.types.AUTHENTICATION_LOGIN_SUCCESS });
  }).catch(() => {
    dispatch({ type: constants.types.AUTHENTICATION_LOGIN_FAILURE });
  });
};

export const storeCredentials = credentials => ({
  credentials,
  type: constants.types.STORE_CREDENTIALS_SUCCESS,
});

export const logout = () => ({ type: constants.types.AUTHENTICATION_LOGOUT_SUCCESS });

export const getBalance = () => (dispatch, getState) => {
  dispatch({ type: constants.types.GET_BALANCE_REQUEST });

  return api.getBalance(getState().configuration).then(response => {
    dispatch({
      type: constants.types.GET_BALANCE_SUCCESS,
      balance: response.result,
    });
  }).catch(() => {
    dispatch({ type: constants.types.GET_BALANCE_FAILURE });
  });
};

export const getAddresses = () => (dispatch, getState) => {
  dispatch({ type: constants.types.GET_ADDRESSES_REQUEST });

  return api.getAddresses(getState().configuration).then(response => {
    dispatch({
      type: constants.types.GET_ADDRESSES_SUCCESS,
      addresses: response.result,
    });
  }).catch(() => {
    dispatch({ type: constants.types.GET_ADDRESSES_FAILURE });
  });
};

export const addAddress = () => (dispatch, getState) => {
  dispatch({ type: constants.types.ADD_ADDRESSES_REQUEST });

  return api.addAddress(getState().configuration).then(response => {
    dispatch({
      type: constants.types.ADD_ADDRESSES_SUCCESS,
      address: {
        address: response.result,
        new: true,
      },
    }).catch(() => {
      dispatch({ type: constants.types.ADD_ADDRESSES_FAILURE });
    });
  });
};

export const getTransactions = () => (dispatch, getState) => {
  dispatch({ type: constants.types.GET_TRANSACTIONS_REQUEST });

  return api.getTransactions(getState().configuration).then(response => {
    dispatch({
      type: constants.types.GET_TRANSACTIONS_SUCCESS,
      transactions: response.result,
    });
  }).catch(() => {
    dispatch({ type: constants.types.GET_TRANSACTIONS_FAILURE });
  });
};

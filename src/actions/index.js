import * as constants from '../constants';
import * as api from '../api';

const fetchBalance = (dispatch, credentials) => {
  dispatch({ type: constants.types.GET_BALANCE_REQUEST });

  return api.getBalance(credentials).then(response => {
    dispatch({
      type: constants.types.GET_BALANCE_SUCCESS,
      balance: response.result,
    });
  }).catch(() => {
    dispatch({ type: constants.types.GET_BALANCE_FAILURE });
  });
};

export const storeCredentials = credentials => dispatch => {
  dispatch({ type: constants.types.AUTHENTICATION_LOGIN_REQUEST });

  return api.getHelp(credentials).then(() => {
    dispatch({ type: constants.types.AUTHENTICATION_LOGIN_SUCCESS });
    dispatch({
      credentials,
      type: constants.types.STORE_CREDENTIALS_SUCCESS,
    });
    fetchBalance(dispatch, credentials);
  }).catch(() => {
    dispatch({ type: constants.types.AUTHENTICATION_LOGIN_FAILURE });
  });
};

export const getBalance = () => (dispatch, getState) => {
  fetchBalance(dispatch, getState().configuration);
};

export const getExchange = () => dispatch => {
  dispatch({ type: constants.types.GET_EXCHANGE_REQUEST });

  return api.getExchange().then(response => {
    dispatch({
      type: constants.types.GET_EXCHANGE_SUCCESS,
      exchange: response,
    });
  }).catch(() => {
    dispatch({ type: constants.types.GET_EXCHANGE_FAILURE });
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

export const addAddress = (label = null) => (dispatch, getState) => {
  dispatch({ type: constants.types.ADD_ADDRESSES_REQUEST });

  return api.addAddress(getState().configuration, label).then(response => {
    dispatch({
      label,
      type: constants.types.ADD_ADDRESSES_SUCCESS,
      address: response.result,
      new: true,
    });
  }).catch(() => {
    dispatch({ type: constants.types.ADD_ADDRESSES_FAILURE });
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

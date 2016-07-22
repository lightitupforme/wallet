import * as constants from '../constants';

const transfers = (state = { sending: false, successMessage: null, error: null }, action) => {
  switch (action.type) {
    case constants.types.SEND_AMOUNT_REQUEST:
      return { sending: true, successMessage: null, error: null };
    case constants.types.SEND_AMOUNT_SUCCESS:
      return { sending: false, successMessage: action.message, error: null };
    case constants.types.SEND_AMOUNT_FAILURE:
      return { sending: false, successMessage: null, error: action.message };
    case constants.types.RESET_SEND_AMOUNT:
      return Object.assign({}, state, { successMessage: null, error: null });
    default:
      return state;
  }
};

export default transfers;

export const isSending = state => state.transfers.sending;

export const getSuccessMessage = state => state.transfers.successMessage;

export const getSendingError = state => state.transfers.error;

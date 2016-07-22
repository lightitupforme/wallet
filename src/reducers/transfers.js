import * as constants from '../constants';

const transfers = (state = { sending: false, error: null }, action) => {
  switch (action.type) {
    case constants.types.SEND_AMOUNT_REQUEST:
      return { sending: true, error: null };
    case constants.types.SEND_AMOUNT_SUCCESS:
      return { sending: false, error: null };
    case constants.types.SEND_AMOUNT_FAILURE:
      return { sending: false, error: action.message };
    case constants.types.RESET_SEND_AMOUNT:
      return Object.assign({}, state, { error: null });
    default:
      return state;
  }
};

export default transfers;

export const isSending = state => state.transfers.sending;

export const getSendingError = state => state.transfers.error;

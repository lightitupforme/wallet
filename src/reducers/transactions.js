import * as constants from '../constants';

const transactions = (state = [], action) => {
  switch (action.type) {
    case constants.types.GET_TRANSACTIONS_SUCCESS:
      return action.transactions;
    case constants.types.GET_TRANSACTIONS_FAILURE:
      return [];
    case constants.types.GET_TRANSACTIONS_REQUEST:
    default:
      return state;
  }
};

export default transactions;

export const getTransactions = state => state.transactions;

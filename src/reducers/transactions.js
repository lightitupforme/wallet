const transactions = (state = [], action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return action.transactions;
    default:
      return state;
  }
};

export default transactions;

export const getTransactions = state => state.transactions;

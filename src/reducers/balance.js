const balance = (state = 0.0, action) => {
  switch (action.type) {
    case 'GET_BALANCE':
      return action.balance;
    default:
      return state;
  }
};

export default balance;

export const getBalance = state => state.balance;

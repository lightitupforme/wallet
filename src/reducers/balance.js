const balance = (state = 0.0, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default balance;

export const getBalance = state => state.balance;

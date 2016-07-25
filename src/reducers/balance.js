import * as constants from '../constants';

const balance = (state = 0.0, action) => {
  switch (action.type) {
    case constants.types.GET_BALANCE_SUCCESS:
      return action.balance;
    case constants.types.GET_BALANCE_FAILURE:
      return 0.0;
    case constants.types.GET_BALANCE_REQUEST:
    default:
      return state;
  }
};

export default balance;

export const getBalance = state => state.balance;

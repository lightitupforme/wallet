import * as constants from '../constants';

const exchange = (state = 0.0, action) => {
  switch (action.type) {
    case constants.types.GET_EXCHANGE_SUCCESS:
      return action.exchange;
    case constants.types.GET_EXCHANGE_REQUEST:
    case constants.types.GET_EXCHANGE_FAILURE:
      return 0.0;
    default:
      return state;
  }
};

export default exchange;

export const getExchange = state => state.exchange;

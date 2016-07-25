import * as constants from '../constants';

const exchange = (state = { change: '0.0', price: 0 }, action) => {
  switch (action.type) {
    case constants.types.GET_EXCHANGE_SUCCESS:
      return Object.assign({}, {
        change: action.exchange.change,
        price: action.exchange.price.eur,
      });
    case constants.types.GET_EXCHANGE_FAILURE:
      return { change: '0.0', price: 0 };
    case constants.types.GET_EXCHANGE_REQUEST:
    default:
      return state;
  }
};

export default exchange;

export const getExchange = state => state.exchange;

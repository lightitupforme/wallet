import * as constants from '../constants';

const addresses = (state = [], action) => {
  switch (action.type) {
    case constants.types.GET_ADDRESSES_SUCCESS:
      return action.addresses;
    case constants.types.ADD_ADDRESSES_SUCCESS:
      return [
        action.address,
        ...state,
      ];
    case constants.types.GET_ADDRESSES_REQUEST:
    case constants.types.GET_ADDRESSES_FAILURE:
      return [];
    case constants.types.ADD_ADDRESSES_REQUEST:
    case constants.types.ADD_ADDRESSES_FAILURE:
    default:
      return state;
  }
};

export default addresses;

export const getAddresses = state => state.addresses;

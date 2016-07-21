const addresses = (state = [], action) => {
  switch (action.type) {
    case 'GET_ADDRESSES':
      return action.addresses;
    case 'ADD_ADDRESS':
      return [
        action.address,
        ...state,
      ];
    default:
      return state;
  }
};

export default addresses;

export const getAddresses = state => state.addresses;

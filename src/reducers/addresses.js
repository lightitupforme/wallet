const addresses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return state.concat([action.address]);
    default:
      return state;
  }
};

export default addresses;

export const getAddresses = state => state.addresses;

export const load = () => {
  try {
    const state = localStorage.getItem('state');

    if (state === null) {
      return undefined;
    }

    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export const save = state => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (err) {
    // Just do nothing when localStorage is not supported
  }
};

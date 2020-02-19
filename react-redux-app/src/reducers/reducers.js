export const initialState = {
  draw: {
    id: 0,
    number: 0
  },
  discard: {
    number: 0,
    pile: []
  },
  hand: {
    number: 0,
    pile: []
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = (state, action) => {
  switch (action.type) {
    case "FETCHED_DOGS":
      return {
        ...state,
        loading: false,
        images: [...state.images, ...action.payload]
      };
    default:
      return state;
  }
};

export default reducers;

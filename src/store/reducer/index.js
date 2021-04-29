const initialState = {
  movies: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH MOVIES BY SEARCH":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;

import axios from "axios";

export const fetchMoviesBySearch = (searchValue) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: `http://www.omdbapi.com/?s=${searchValue}&apikey=ef080f4a`,
    })
      .then(({ data }) => {
        dispatch({
          type: "FETCH MOVIES BY SEARCH",
          payload: data.Search,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setLoading = () => {
  return {
    type: "LOADING",
  };
};

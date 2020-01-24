import axios from "axios";

export const FETCHING_JOKES_START = "FETCHING_JOKES_START";
export const FETCHING_JOKES_SUCCESS = "FETCHING_JOKES_SUCCESS";
export const FETCHING_JOKES_FAILURE = "FETCHING_JOKES_FAILURE";

export const fetchJokes = () => dispatch => {
  dispatch({ type: FETCHING_JOKES_START });
  // MAKE API CALL
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: { Accept: "text/plain" }
    })
    .then(res => {
      //   console.log(res.data.joke);
      dispatch({ type: FETCHING_JOKES_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

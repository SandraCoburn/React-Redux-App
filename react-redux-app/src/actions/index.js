import axios from "axios";

export const fetchJokes = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_JOKES" });
    // MAKE API CALL
    axios
      .get("https://icanhazdadjoke.com/search")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
};

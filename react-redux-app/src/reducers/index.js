import {
  FETCHING_JOKES_START,
  FETCHING_JOKES_SUCCESS,
  FETCHING_JOKES_FAILURE
} from "../actions";

const initialState = {
  isLoading: false,
  jokes: null,
  error: "",
  image: "https://icanhazdadjoke.com/j/R7UfaahVfFd.png"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOKES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCHING_JOKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jokes: action.payload,
        error: ""
      };
    case FETCHING_JOKES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

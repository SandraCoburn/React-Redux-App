import React from "react";
import { connect } from "react-redux";
import { fetchJokes } from "../actions";
import Loader from "react-loader-spinner";

const Jokes = props => {
  return (
    <div>
      <h1>Dad Jokes</h1>
      {/* <img src={props.image} /> */}
      <button onClick={props.fetchJokes}>Get a Joke</button>
      <div className="card">
        {!props.jokes && !props.isLoading && (
          <h2>Go ahead and push the button to get a joke now!</h2>
        )}
        {props.isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}

        {props.jokes && !props.isLoading && <h2>{props.jokes}</h2>}
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    isLoading: state.isLoading,
    jokes: state.jokes,
    error: state.error,
    image: state.image
  };
};

export default connect(mapStatetoProps, { fetchJokes })(Jokes);

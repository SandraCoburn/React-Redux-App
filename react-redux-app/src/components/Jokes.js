import React from "react";
import { connect } from "react-redux";

const Jokes = props => {
  return (
    <div>
      <h1>Dad Jokes</h1>
      <button onClick={props.fetchJokes}>Get a Joke</button>
      {!props.jokes && !props.isLoading && (
        <h2>Go ahead and push the button to get a joke</h2>
      )}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    isLoading: state.isLoading,
    jokes: state.jokes,
    error: state.error
  };
};

export default connect(mapStatetoProps, {})(Jokes);

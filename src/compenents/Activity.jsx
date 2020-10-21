import React from "react";
import { connect } from "react-redux";
import { eat, play, nap } from "../redux/actions";

const Activity = ({ activity, eat, play, nap }) => (
  <>
    <h1>What is the cat doing now???</h1>
    <p>The cat is {activity}.</p>
    <button type="button" onClick={()=> eat()}>eating</button>
  <button type="button" onClick={()=> play()}>playing</button>
  <button type="button" onClick={()=> nap()}>napping</button>
  </>
);

const mapStateToProps = (state) => {
  const { activity } = state;
  return activity;
};

export default connect(mapStateToProps, { eat, play, nap })(Activity);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const CardDetails = props => {
  const { firstName, lastName, profilePic, userImage, title, description, artid} = props.location.state;
  const Dispatch = useDispatch();

  const deleteArt = () => {
    axios.delete(`https://als-artportfolio.herokuapp.com/art/art/${artid}`)
    .then(response => {
        props.history.push("/");
        Dispatch({ type: "UPDATE"});
    })
    .catch(error => {
        console.log(error);
    })
  }

  return (
    <div className="photo-container">
      <div className="photo-head">
        <img className="user-avatar" src={profilePic} />
        <h2>{title}</h2>
      </div>
      <div className="user-img">
        <img src={userImage} alt="user image" />
        <p>{description}</p>
      </div>
      <button onClick={() => deleteArt()}>Delete</button>
    </div>
  );
};

const mapStateToProps = state => ({
  updates: state.updates,
});


export default connect(
  mapStateToProps,
)(CardDetails);

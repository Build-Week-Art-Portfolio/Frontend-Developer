import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import GalleryList from "./GalleryList";
import axios from "axios";

const CardDetails = props => {
  const { firstName, lastName, profilePic, userImage, title, description, artid} = props.location.state;

  const deleteArt = () => {
    axios.delete(`https://als-artportfolio.herokuapp.com/art/art/${artid}`)
    .then(response => {
        console.log(response);
        props.history.push("/");
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

export default CardDetails;

import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import GalleryList from "./GalleryList";
import axios from "axios";


const CardDetails = props => {
  console.log("Photos appear in the card details",props.location.state.userPhotos);
  const { firstName, lastName, profilePic, userImage, title, description} = props.location.state;
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
    </div>
  );
};

export default CardDetails;

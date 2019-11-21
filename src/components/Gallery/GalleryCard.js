import React from "react";
import { arrayTypeAnnotation } from "@babel/types";

const GalleryCard = props => {
  return (
    <div className="user-card">
      <div className="user-head">
        <img className="user-avatar" src={props.profilePic} />
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
      </div>
      <h3>{props.title}</h3>
      <div className="user-img">
        <img src={props.userImage} alt="random image" />
      </div>
    </div>
  );
};

export default GalleryCard;

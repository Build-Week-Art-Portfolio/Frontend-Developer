import React from "react";

const GalleryCard = props => {
  return (
    <div className="user-card">
      <div className="user-head">
        <img className="user-avatar" src={props.profilePic} />
        <div className="user-name">
          <p>{props.firstName}</p>
          <p>{props.lastName}</p>
        </div>
      </div>
      <h3>{props.title}</h3>
      <div className="user-img">
        <img src={props.userImage} alt="random image" />
      </div>
      
    </div>
  );
};

export default GalleryCard;

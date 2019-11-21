import React from "react";

const GalleryCard = props => {
  return (
    <div className="user-card">
      <div className="user-head">
        <img className="user-avatar" src={props.profilePic} />
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
      </div>
      <div className="user-img">
        <img src="https://picsum.photos/400" alt="random image" />
      </div>
    </div>
  );
};

export default GalleryCard;

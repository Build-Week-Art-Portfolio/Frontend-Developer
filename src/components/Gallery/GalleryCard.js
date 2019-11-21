import React from "react";

const GalleryCard = props => {
  console.log(props)
  // console.log(props.image)
  return (
    <div className="user-card">
      <div className="user-head">
        <img className="user-avatar" src="props.avatar" />
        <p>{props.name}</p>
      </div>
      <div className="user-img">
        <img src={props.image} />
        <h2>{props.title}</h2>
        <p>
          <i class="fas fa-heart"></i>123
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;

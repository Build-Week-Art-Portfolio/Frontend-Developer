import React from "react";


const CardDetails = props => {
  console.log(props.location, "props")
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

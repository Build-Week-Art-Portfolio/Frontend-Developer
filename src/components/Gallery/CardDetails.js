import React from "react";

const CardDetails = props => {
  const { firstName, lastName, profilePic } = props.location.state;
  return (
    <div className="user-card">
      <div className="user-head">
        <img className="user-avatar" src={profilePic} />
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div className="user-img">
        <img src="https://picsum.photos/400" alt="random image" />
      </div>
    </div>
  );
};

export default CardDetails;

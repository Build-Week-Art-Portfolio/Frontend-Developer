import React from "react";
import axios from 'axios';

const deleteArt = props => {
  props.preventDefault();
  axios.delete(`https://als-artportfolio.herokuapp.com/art/arts/${props.artid}`)
  .then(response => {
      console.log(response);
  })
  .catch(error => {
      console.log(error);
  })
}

const GalleryCard = props => {
  console.log(props)
  // console.log(props.image)
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
      <button onClick={deleteArt}>Delete</button>
    </div>
  );
};

export default GalleryCard;

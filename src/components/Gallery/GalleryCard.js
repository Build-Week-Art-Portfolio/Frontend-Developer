import React from "react";
import axios from 'axios';

const deleteArt = props => {
  props.preventBubble();
  axios.delete(`https://als-artportfolio.herokuapp.com/art/art/${props.artid}`)
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
        <img className="user-avatar" src="props.avatar" />
        <p>{props.name}</p>
      </div>
      <div className="user-img">
        <img src={props.image} />
        <h2>{props.title}</h2>
        <p>
          <i class="fas fa-heart"></i>123
        </p>
        <button onSubmit={deleteArt}>Delete</button>
      </div>
    </div>
  );
};

export default GalleryCard;

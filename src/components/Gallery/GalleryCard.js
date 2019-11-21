import React from "react";
<<<<<<< HEAD
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
=======
import { arrayTypeAnnotation } from "@babel/types";
>>>>>>> a2bad4139a22d7c4268a002a64f6922fce5a8f22

const GalleryCard = props => {
  console.log(props)
  // console.log(props.image)
  return (
    <div className="user-card">
      <div className="user-head">
<<<<<<< HEAD
        <img className="user-avatar" src="props.avatar" />
        <p>{props.name}</p>
=======
        <img className="user-avatar" src={props.profilePic} />
        <div className="user-name">
          <p>{props.firstName}</p>
          <p>{props.lastName}</p>
        </div>
>>>>>>> a2bad4139a22d7c4268a002a64f6922fce5a8f22
      </div>
      <h3>{props.title}</h3>
      <div className="user-img">
<<<<<<< HEAD
        <img src={props.image} />
        <h2>{props.title}</h2>
        <p>
          {/* <i class="fas fa-heart"></i>123 */}
        </p>
        
=======
        <img src={props.userImage} alt="random image" />
>>>>>>> a2bad4139a22d7c4268a002a64f6922fce5a8f22
      </div>
      <button onClick={deleteArt}>Delete</button>
    </div>
  );
};

export default GalleryCard;

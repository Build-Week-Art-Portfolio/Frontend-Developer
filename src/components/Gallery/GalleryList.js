import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

// const galleryGet = () => {
//   axios.get("https://als-artportfolio.herokuapp.com/art/arts")
//   .then(response => {
//     console.log(response)
//   })
// }

const GalleryList = props => {

  // useEffect(() => {
  //   galleryGet();
  // },[])
console.log(props)
  return (
    <div className="user-container">
      {props.userPhotos.map(user => {
        return (
          <Link to={`/photo-data/${user.id}`}>
            <GalleryCard
              key={user.id}
              name={user.name}
              avatar={user.avatar}
              image={user.image}
              likes={user.likes}
            />
          </Link>
        );
      })}
    </div>
  );
};


export default GalleryList;
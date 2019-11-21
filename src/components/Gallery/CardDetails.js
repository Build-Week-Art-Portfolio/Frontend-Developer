import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import GalleryList from "./GalleryList";
import axios from "axios";

// const deleteArt = props => {
//   axios.delete(`https://als-artportfolio.herokuapp.com/art/art/${props.artid}`)
//   .then(response => {
//       console.log(response);
//   })
//   .catch(error => {
//       console.log(error);
//   })
// }

const CardDetails = props => {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    setCardInfo(
      props.userPhotos.filter(function(photo) {
        return photo.id === props.match.params.id;
      })
    );
  }, []);

  // console.log(cardInfo);
  // console.log(props.userPhotos);
  // console.log(props.match.params.id);
  // console.log(props.match.params.title);
  console.log(GalleryCard, {...props});

  return (
  <div>
    <h1>this is hard coded</h1>
    {props.userPhotos.map(user => {
        return (
            <GalleryCard
              // key={user.artid}
              // name={user.name}
              // avatar={user.avatar}
              image={user.imageurl}
              title={user.title}
              // likes={user.likes}
            />
        );
      })}
  </div>
  )
};

export default CardDetails;

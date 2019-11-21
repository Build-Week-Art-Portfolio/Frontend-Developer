import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";

const CardDetails = props => {
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    setCardInfo(
      props.userPhotos.filter(function(photo) {
        return photo.id === props.match.params.id;
      })
    );
  }, []);
  console.log(cardInfo);
  console.log(props.userPhotos);
  console.log(props.match.params.id);
  console.log(props.match.params.title);

  return (
  <div>
    <h1>789</h1>
  </div>
  )
};

export default CardDetails;

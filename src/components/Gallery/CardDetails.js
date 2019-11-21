import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import GalleryList from "./GalleryList";
import axios from "axios";

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
  console.log(props);
  let card;
  if (typeof props.match.params.id === 'string') {

   card = props.userPhotos.filter(card => {
    console.log(card.artid)
    console.log(props.match.params.id) 
    return (`${card.artid}` === props.match.params.id)

  })
  }
  console.log(card);
  let component; 

  if (!Array.isArray(card) || card.length === 0 ) {
    component = props.userPhotos.map(user => {
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
      })   
  } else {
    component = <GalleryCard
    // key={user.artid}
    // name={user.name}
    // avatar={user.avatar}
    image={card[0].imageurl}
    title={card[0].title}
    // likes={user.likes}
    />
  }

console.log(card);

  return (
  <div>
    {component}
  </div>
  )
};

export default CardDetails;

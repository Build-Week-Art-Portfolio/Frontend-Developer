import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

<<<<<<< HEAD
// const galleryGet = () => {
//   axios.get("https://als-artportfolio.herokuapp.com/art/arts")
//   .then(response => {
//     console.log(response)
//   })
// }
=======
const GalleryList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://als-artportfolio.herokuapp.com/users/users")
      .then(response => {
        setUsers(response.data);
        console.log(response.data, "data");
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);
>>>>>>> a2bad4139a22d7c4268a002a64f6922fce5a8f22

const GalleryList = props => {

  // useEffect(() => {
  //   galleryGet();
  // },[])
console.log(props)
  return (
    <div className="user-container">
<<<<<<< HEAD
      {props.userPhotos.map(user => {
        return (
          <Link to={`/photo-data/${user.artid}`}>
            <GalleryCard
              key={user.artid}
              name={user.name}
              avatar={user.avatar}
              image={user.imageurl}
              title={user.title}
              likes={user.likes}
            />
          </Link>
        );
      })}
=======
      {users.map(user =>
        user.arts.map(art => (
          <Link
            key={user.userid}
            to={{
              pathname: `/user-list/${user.userid}`,
              state: {
                userID: user.userid,
                firstName: user.firstname,
                lastName: user.lastname,
                profilePic: user.profilepicture,
                userImage: art.imageurl,
                title: art.title,
                description: art.description
              }
            }}
          >
            <GalleryCard
              userID={user.userid}
              firstName={user.firstname}
              lastName={user.lastname}
              profilePic={user.profilepicture}
              userImage={art.imageurl}
              title={art.title}
              description={art.description}
            />
          </Link>
        ))
      )}
>>>>>>> a2bad4139a22d7c4268a002a64f6922fce5a8f22
    </div>
  );
};


export default GalleryList;
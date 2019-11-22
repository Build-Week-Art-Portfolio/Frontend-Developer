import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const GalleryList = (props) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://als-artportfolio.herokuapp.com/users/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("no data received", error);
      });
  }, []);

    if (props.userPhotos === []) {
      return(
        <div>Loading</div>
      )
    } else {
      console.log("here are the photos",props.userPhotos)
      return (
        <div className="user-container">
          {/* new .map code that iterates over the art list in order to obatin the art ID to get the deletion process to work */}
          {props.userPhotos.map(photo => {
            return(
              <Link
              key={photo.artid}
              to={{
                pathname: `/art-list/${photo.user.userid}`,
                state: {
                  userID: photo.user.userid,
                  firstName: photo.user.firstname,
                  lastName: photo.user.lastname,
                  profilePic: photo.user.profilepicture,
                  userImage: photo.imageurl,
                  title: photo.title,
                  description: photo.description,
                  artid: photo.artid,
                }
              }}
            >
              <GalleryCard
                userID={photo.user.userid}
                firstName={photo.user.firstname}
                lastName={photo.user.lastname}
                profilePic={photo.user.profilepicture}
                userImage={photo.imageurl}
                title={photo.title}
                description={photo.description}
                artid={photo.artid}
              />
              </Link>
              )
              
          }
              
              
          )
          }
          {/* old .map code that iterated on the list of users, had to use the art list instead because we needed the art ID for the deletion process */}
          {/* {users.map(user =>
            user.arts.map(art => (
              <Link
                key={user.userid}
                to={{
                  pathname: `/art-list/${user.userid}`,
                  state: {
                    userID: user.userid,
                    firstName: user.firstname,
                    lastName: user.lastname,
                    profilePic: user.profilepicture,
                    userImage: art.imageurl,
                    title: art.title,
                    description: art.description,
                    userPhotos: props.userPhotos,
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
          )} */}
        </div>
      );
    }

    
};


export default GalleryList;
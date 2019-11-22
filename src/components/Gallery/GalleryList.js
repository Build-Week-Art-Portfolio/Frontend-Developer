import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const GalleryList = (props) => {
  console.log("Gallery List is displaying")

  const [users, setUsers] = useState([]);

  console.log("Photos appear in the gallery",props.userPhotos);

  useEffect(() => {
    console.log("axios call is going out on mount")
    axios
      .get("http://als-artportfolio.herokuapp.com/users/users")
      .then(response => {
        console.log("data received", response.data);
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
          {props.userPhotos.map(photo => {
            if (!photo.user) {
              return(
                <GalleryCard
                  userID={0}
                  firstName={"N/A"}
                  lastName={"N/A"}
                  profilePic={""}
                  userImage={photo.imageurl}
                  title={photo.title}
                  description={photo.description}
                  artid={photo.artid}
                />
              )
            }
            else {
              return(
                <Link
                key={photo.artid}
                to={{
                  pathname: `/user-list/${photo.user.userid}`,
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
          }
              
              
          )
          }
          {/* {users.map(user =>
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
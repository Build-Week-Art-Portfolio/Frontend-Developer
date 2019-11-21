import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const GalleryList = () => {
  console.log("Gallery List is displaying")

  const [users, setUsers] = useState([]);

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

  console.log("useEffect has finished")

    return (
      <div className="user-container">
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
      </div>
    );
};


export default GalleryList;
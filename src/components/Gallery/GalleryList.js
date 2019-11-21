import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

const GalleryList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://als-artportfolio.herokuapp.com/users/users")
      .then(response => {
        setUsers(response.data);
        
        
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <div className="user-container">
      {users.map(user => (
        <Link key={user.userid} to={
          {
            pathname:`/user-list/${user.userid}`,
            state: {
              userID:user.userid,
              firstName:user.firstname,
              lastName:user.lastname,
              profilePic:user.profilepicture
            }}
        }>
          <GalleryCard
            userID={user.userid}
            firstName={user.firstname}
            lastName={user.lastname}
            profilePic={user.profilepicture}
          />
        </Link>
      ))}
    </div>
  );
};

export default GalleryList;

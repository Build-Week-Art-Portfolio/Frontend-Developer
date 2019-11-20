import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const defaultProfile = {
    firstname: "",
    lastname: "",
    username: "",
    primaryemail: "",
    profilepicture: "",
    age: "",
    location: "",
    arts: [],
}

const ProfilePage = (props) => {
    const [profileData, setProfileData] = useState(defaultProfile);
    const [editProfile, setEditProfile] = useState(defaultProfile);
    const [editing, setEditing] = useState(false);
    const [userID, setID] = useState("");
    const Dispatch = useDispatch();

    // clears the stored token as well as the logged in user in the redux store
    const clearLoggedInUser = () => {
        sessionStorage.removeItem('logged-user');
        Dispatch({ type: "SET_LOGGED", payload: ""});
        sessionStorage.removeItem("token");
    }
    
    // fetch the pofile data of the user when the component mounts
    // set the profile data to display the user's profile page

    const getProfileData = () => {
        axiosWithAuth().get(`https://als-artportfolio.herokuapp.com/users/users/`)
        .then(response => {
            console.log(response);

            // matches the proper user from the list of users and narrows down the info to that one user
            const userInfo = response.data.filter(function (user) {return user.username === props.loggedInUser})[0];

            // if the user cannot be found in the userlist - send back to login page (this is for when your token expires)
            if (!userInfo) {
                clearLoggedInUser();
                props.history.push("/");
            }

            // sets the profile data to the matched user
            setProfileData({
                firstname: userInfo.firstname,
                lastname: userInfo.lastname,
                username: userInfo.username,
                primaryemail: userInfo.primaryemail,
                profilepicture: userInfo.profilepicture,
                age: userInfo.age,
                location: userInfo.location,
                arts: userInfo.arts,
            });

            // sets the id of the user (for updating profile functionality)
            setID(userInfo.userid);
        })
        .catch(error => {
        console.log(error);
        })
    }

    // populate profile data on render
    useEffect(() => {
        getProfileData();
    },[])

    // clear data and go can to home page
    const LogOut = () => {
        clearLoggedInUser();
        props.history.push("/");
    }

    // deletion of account
    const deleteProfile = () => {
        clearLoggedInUser();

        // Delete request for profile
        axiosWithAuth().delete(`https://als-artportfolio.herokuapp.com/users/user/${userID}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        
        // Return to home page
        props.history.push("/");
    }

    // toggles edit functionality
    const editMode = () => {
        if (!editing) {
            // unhides all edit fields and sets the edit data to current profile data
            setEditing(true);
            setEditProfile(profileData);
        } else {
            // if edit mode is active, submits the edit data to the server and turns off edit mode
            axiosWithAuth().put(`https://als-artportfolio.herokuapp.com/users/user/${userID}`,editProfile)
            .then(response => {
                console.log("edit profile submission",editProfile)
                console.log("edit profile response",response);
                getProfileData();
            })
            .catch(error => {
                console.log(error);
            })
            setEditing(false);
        }
    }

    // state/field updater function for edit mode
    const updateEdit = e => {
        e.preventDefault();
        setEditProfile({
            ...editProfile,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="profile-div" style={{'textAlign':'center'}}>
            <button onClick={() => editMode()}>{!editing ? 'Edit Profile' : 'Submit Edits'}</button>
            <h1>{profileData.firstname ? profileData.firstname : "First name: N/A"} {profileData.lastname ? profileData.lastname : "Last name: N/A"}</h1>
            <input name='firstname' value={editProfile.firstname} style={editing ? {'display': 'inline-block'} : {'display': 'none'}} onChange={updateEdit}></input>
            <input name='lastname' value={editProfile.lastname} style={editing ? {'display': 'inline-block'} : {'display': 'none'}} onChange={updateEdit}></input>
            <h2>Username: {profileData.username}</h2>
            {/* removed username edit to fix bugs */}
            {/* <input name='username' value={editProfile.username} style={editing ? {'display': 'inline-block'} : {'display': 'none'}} onChange={updateEdit}></input><br /> */}
            {profileData.profilepicture ? <img src={profileData.profilepicture}></img> : <p>No Profile Picture</p>} <br/>
            <input name='profilepicture' value={editProfile.profilepicture} style={editing ? {'display': 'inline-block'} : {'display': 'none'}} onChange={updateEdit}></input><br />
            <p>Email: {profileData.primaryemail}</p>
            <input name='primaryemail' value={editProfile.primaryemail} style={editing ? {'display': 'inline-block'} : {'display': 'none'}} onChange={updateEdit}></input><br />
            <p>Age: {profileData.age}</p>
            <input name='age' value={editProfile.age} style={editing ? {'display': 'inline-block'} : {'display': 'none'}} onChange={updateEdit}></input><br />
            <p>{profileData.location ? `Location: ${profileData.location}` : "Location: N/A"}</p>
            <input name='location' value={editProfile.location} style={editing ? {'display': 'inline-block'} : {'display': 'none'}} onChange={updateEdit}></input><br />
            <button>Add Art</button><br />
            <p>Your posts:</p>
            {profileData.arts.map(post => (
                <div>
                    <h2>{post.title}</h2>
                    <img src={post.img} style={{'width': '200px', 'height':'auto'}}></img>
                    <p>Posted on: {post.date}</p>
                    <p>Description: {post.description}</p>
                </div>
            ))}
            <button onClick={LogOut}>Log Out</button>
            <br /><br />
            <button onClick={deleteProfile} style={{'background-color':'red', 'color':'white'}}>Delete Profile</button>
        </div>
    );
};

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
});

export default connect(
    mapStateToProps,
)(ProfilePage);

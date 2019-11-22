import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';



function Header(props) {
    console.log("header props", props.history)
    const Dispatch = useDispatch();
    const [isLoggedIn, setLogged] = useState(false);

    const updateID = (id) => {
        sessionStorage.setItem("user-id",id);
        Dispatch({ type: "SET_ID", payload: id});
    }

    const clearLoggedInUser = () => {
        sessionStorage.removeItem('logged-user');
        Dispatch({ type: "SET_LOGGED", payload: ""});
        sessionStorage.removeItem("token");
    }
    
    const LogOut = () => {
        clearLoggedInUser();
        updateID("");
        props.history.push("/");
        Dispatch({ type: "UPDATE"});
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
        setLogged(true);
        } else {
        setLogged(false);
        }
    },[props.updates]);



    return (
        <div class="topnav">
            <a class="active" href="https://nifty-edison-39c663.netlify.com/">ArtFolio</a>
            <Link to="/">Gallery</Link>
            <a href="https://nifty-edison-39c663.netlify.com/about.html">About Us</a>
            <Link to="/character">Users</Link>
            <Link to="profile-page">{isLoggedIn ? "Profile" : ""}</Link>
            <a onClick={() => LogOut()} className="log-out">{isLoggedIn ? "Log Out" : ""}</a>
        </div>
    );
}

const mapStateToProps = state => ({
    updates: state.updates,
  });


export default connect(
    mapStateToProps,
)(Header);

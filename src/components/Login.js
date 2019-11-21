import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

const Login = (props) => {
    const Dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })
    const [isLoggedIn, setLogged] = useState(false);

    const setLoggedInUser = () => {
        sessionStorage.setItem("logged-user",credentials.username)
        Dispatch({ type: "SET_LOGGED", payload: sessionStorage.getItem('logged-user')});
    }

    const handleChange = e => {
        e.preventDefault();
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        // post request to retrieve a token from the backend
        e.preventDefault();
        axios
        .post("https://als-artportfolio.herokuapp.com/login", 
            `grant_type=password&username=${credentials.username}&password=${credentials.password}`, 
            {
                headers: {
                    Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
        .then(response => {
            console.log("response", response.data);
            sessionStorage.setItem("token", response.data.access_token);
            setLoggedInUser();
            // once token is handeled, navigate to profile page
            props.history.push("/profile-page");
        })
        .catch(err => {
            console.log("there was an error");
            console.log(err);
        })
    };

    const goToSignUp = e => {
        e.preventDefault();
        props.history.push("/register");
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
        setLogged(true);
        } else {
        setLogged(false);
        }
    },[]);

    return (
    <div className="home-page">
        <h1>Welcome to the Art Portfolio</h1>
        <div className="login-form">
            <h2>{isLoggedIn ? "LOGGED IN!" : "Please login"}</h2>
            <form>
                <div className="input-div">
                    <label htmlFor="username">Username:</label>
                    <input className="titleStyles"
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-div">
                    <label htmlFor="password">Password:</label>
                    <input className="titleStyles"
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={login} className="postButton">Log in</button>
                <p>Don't have an account?</p>
                <button onClick={goToSignUp} className="postButton">Create Account</button>
            </form>
        </div>
    </div>
    );
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
  });


export default connect(
    mapStateToProps,
)(Login);

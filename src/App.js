import "./styles.scss";
import './App.css'
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Login from "./components/Login";
import ProfilePage from './components/ProfilePage.js';
import PrivateRoute from './components/PrivateRoute';
import AddForm from "./components/AddForm";
import Register from "./components/Register";
import GalleryList from "./components/Gallery/GalleryList";
import CardDetails from './components/Gallery/CardDetails';
import GalleryCard from "./components/Gallery/GalleryCard";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import Card from "./components/Card";
import { connect } from 'react-redux';

function App(props) {
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://als-artportfolio.herokuapp.com/art/arts")
    .then(response => {
      console.log("we got a response",response)
      setUserPhotos(response.data)
    });
  },[props.updates])

  useEffect(() => { 
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` 
    //  parameter: the dependancies array!
    axios.
        get('https://als-artportfolio.herokuapp.com/users/users/')
        .then(response => {
            console.log("Got a list of users", response);
        })
        .catch(err => {
          console.log("Can't get a list of users",err)
        })
    }, []);

  return (
    <Router>
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/profile-page">
          <Route exact path="/profile-page" component={ProfilePage} />
        </PrivateRoute>
        <Route
          exact
          path="/"
          render={props => {
            {
              return <GalleryList {...props} userPhotos={userPhotos} />;
            }
          }}
        />
        <Route
          exact
          path="/photo-data/:id"
          render={props => {
            {
              return <CardDetails {...props} userPhotos={userPhotos} />;
            }
          }}
        />

        <Route exact path="/art-list" component={GalleryList} />
        <Route path="/art-list/:id" component={CardDetails} />
        <Route exact path="/character/" component={CharacterList}/>
        <Route exact path="/character/:id" component={Card} />

        <Route exact path="/photo-data/:id" component={GalleryCard} />

        <Route 
        exact
        path="/AddForm"
        render={props => {
          {
            return <AddForm {...props} />;
          }
        }} 
        />

      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  updates: state.updates,
});

export default connect(
  mapStateToProps,
)(App);
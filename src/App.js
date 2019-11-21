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
import Header from "./components/Gallery/Header.js";
import CharacterList from "./components/Gallery/CharacterList";
import Card from "./components/Gallery/Card";

export default function App() {
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://als-artportfolio.herokuapp.com/art/arts")
    .then(response => {
      console.log("we got a response",response)
      setUserPhotos(response.data)
    });
  },[])

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/profile-page">
          <Route exact path="/profile-page" component={ProfilePage} />
        </PrivateRoute>
        <Link to="/">Gallery</Link>
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
         
        <Route exact path="/photo-data/:id" component={GalleryCard} />

        <Route
        exact
        path="/AddForm"
        render={props => {
          {
            return <AddForm />;
          }
        }} />
        <Link to="/">Gallery</Link>
        <Link to="/">Login</Link>

        <Route exact path="/user-list" component={GalleryList} />
        <Route path="/user-list/:id" component={CardDetails} />
    
        <Route exact path="/character/" component={CharacterList}/>
        <Route exact path="/character/:id" component={Card} />
      </div>
    </Router>
  );
}
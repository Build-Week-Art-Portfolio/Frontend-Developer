import "./styles.scss";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import ProfilePage from './components/ProfilePage.js';
import PrivateRoute from './components/PrivateRoute';
import AddForm from "./components/AddForm";
import Register from "./components/Register";

import GalleryList from "./components/Gallery/GalleryList";
import CardDetails from './components/Gallery/CardDetails';


function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/profile-page">
          <Route exact path="/profile-page" component={ProfilePage} />
        </PrivateRoute>

        <Link to="/user-list">Gallery</Link>
        <Link to="/">Login</Link>

        <Route exact path="/user-list" component={GalleryList} />
        <Route path="/user-list/:id" component={CardDetails} />
      </div>
    </Router>
  );
}

export default App;

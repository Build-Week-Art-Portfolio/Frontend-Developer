import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import reducer from './reducers';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducer, applyMiddleware(logger))


ReactDOM.render(
    <Router>
        <Provider store = {store}>
        <App />
        </Provider>
    </Router>,
    document.getElementById("root")
    
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


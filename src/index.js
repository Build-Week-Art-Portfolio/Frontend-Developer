import './index.css';
import * as serviceWorker from './serviceWorker';
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


const store = createStore(reducer, applyMiddleware(logger))


ReactDOM.render(
    <Router>
        <Provider store = {store}>
        <App />
        </Provider>
    </Router>,
    document.getElementById("root")
    
); 


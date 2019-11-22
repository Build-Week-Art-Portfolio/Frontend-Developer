import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div class="topnav">
            <a class="active" href="https://nifty-edison-39c663.netlify.com/">ArtFolio</a>
            <Link to="/">Gallery</Link>
            <a href="https://nifty-edison-39c663.netlify.com/about.html">About Us</a>
            <Link to="/character">Users</Link>
            <a href="#about">Login</a>
        </div>
    );
}
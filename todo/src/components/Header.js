import React from "react";
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-light">
        <div class="container-fluid">
          <img
            src="https://i.ibb.co/z42DTYm/logo.png"
            alt="logo"
            width="200"
            height="60"
            class="d-inline-block align-text-top"
          />
        </div>
        </nav>
        <div className="m-4 options">
            <ul class="nav justify-content-end ">
            <li class="nav-item">
                <Link to="/" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/registration" class="nav-link">New To-do</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link">To-do List</Link>
            </li>
            </ul>
        </div>
   
    </div>
  );
}

export default Header;
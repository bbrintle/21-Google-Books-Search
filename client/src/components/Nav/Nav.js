import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import './Nav.css'

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary newContainer">
        <div className='title'>
          <a className="navbar-brand" id="homeLink" href="/">
            Book React App
          </a>
        </div>
        <div className="collapsable">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link navbar-brand" id="savedLink" href="/bookshelf">Saved Books</a>
            </li>
          </ul>
        </div>
      </nav>
      <Jumbotron/>
    </div>
  );
}

export default Nav;

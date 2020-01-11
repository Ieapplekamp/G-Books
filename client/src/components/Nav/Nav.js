import React from "react";
import "./Nav.css"

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="d-flex navbar-brand justify-content-end">Google Books Search!</div>
      {/* <ul className="navbar-nav"> */}
      <div className="d-flex justify-content-end">
          <li className={`nav-item ${props.Search}`}>
            <a className="nav-link" href="./Search">Search</a>
          </li>
          <li className={`nav-item ${props.Saved}`}>
            <a className="nav-link" href="./Saved">Saved</a>
          </li>
        </div>
        {/* </ul> */}
    </nav>
  );
}

export default Nav;

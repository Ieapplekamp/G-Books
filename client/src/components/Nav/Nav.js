import React from "react";

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Google Books Search!</div>
        <ul className="navbar-nav">
          <li className={`nav-item ${props.Search}`}>
            <a className="nav-link" href="./Search">Search</a>
          </li>
          <li className={`nav-item ${props.Saved}`}>
            <a className="nav-link" href="./Saved">Saved</a>
          </li>
        </ul>
    </nav>
  );
}

export default Nav;

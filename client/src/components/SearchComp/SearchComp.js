import React from "react";

function SearchComp(props) {
    return (
        <nav className="navbar">
      <div className="navbar-brand">Google Books Search!</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className={`nav-item ${props.Search}`}>
            <a className="nav-link" href="./Search">Search</a>
          </li>
          <li className={`nav-item ${props.Saved}`}>
            <a className="nav-link" href="./Saved">Saved</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-danger" href="" target="_blank" rel="noopener noreferrer">Github Repo</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default SearchComp;

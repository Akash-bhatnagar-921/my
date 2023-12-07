import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.modeType}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.modeType==='light'?'dark':'light'}`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`nav-item `}>
              <a className={`nav-link active text-${props.modeType==='light'?'dark':'light'}`} relative='path' aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link active text-${props.modeType==='light'?'dark':'light'}`} relative='path' href="/about">
                {props.about}
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.modeType==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleButton}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.toggleIconName}
            </label>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 mx-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About",
  modeName :"Enable Dark Mode"
};

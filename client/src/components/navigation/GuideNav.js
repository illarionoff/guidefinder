import React from "react";
import { Link } from "react-router-dom";

export default function GuideNav(props) {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src="https://via.placeholder.com/200x100" alt="Logo" />
      </div>
      <ul className="nav__bar">
        <li>
          <Link to="/" className="nav__link">
            Index
          </Link>
        </li>
        <li>
          <Link to="/guide/myprofile" className="nav__link">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link" onClick={props.logOutGuide}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

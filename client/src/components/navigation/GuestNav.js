import React from "react";
import { Link } from "react-router-dom";

export default function GuestNav(props) {
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
          <Link to="/guest/profile" className="nav__link">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/" className="nav__link" onClick={props.logOutGuest}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

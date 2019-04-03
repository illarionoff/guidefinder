import React from "react";
import { Link } from "react-router-dom";

export default function GuestNav(props) {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src="/img/logo.gif" alt="Logo" />
      </div>
      <ul className="nav__bar">
        <li>
          <Link to="/" className="nav__link" onClick={props.logOutGuest}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

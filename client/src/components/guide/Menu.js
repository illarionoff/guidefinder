import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <aside>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          <li>
            <i className="menu-icon far fa-id-card" />
            <Link to="/guide/myprofile" className="nav__link">
              Profile
            </Link>
          </li>
          <li>
            <i className="menu-icon far fa-image" />
            <Link to="/guide/tours" className="nav__link">
              Tours
            </Link>
          </li>
          <li>
            <i className="menu-icon far fa-image" />
            <Link to="/guide/addtour" className="nav__link">
              Add Tour
            </Link>
          </li>
          <li>
            <i className="menu-icon far fa-list-alt" />
            <Link to="/guide/reservations" className="nav__link">
              Reservations
            </Link>
          </li>
          <li>
            <i class="menu-icon fas fa-sliders-h" />

            <Link to="/guide/editprofile" className="nav__link">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

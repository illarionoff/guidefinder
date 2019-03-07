import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { guideLogoutAction } from "../../actions/guideAuthActions";
import { guestLogoutAction } from "../../actions/guestAuthActions";

import GuestNav from "./GuestNav";
import GuideNav from "./GuideNav";

export class Navbar extends Component {
  logOutGuide = () => {
    this.props.guideLogoutAction();
  };
  logOutGuest = () => {
    this.props.guestLogoutAction();
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    const { guestAuthenticated } = this.props.guestAuth;

    if (isAuthenticated) {
      return <GuideNav logOutGuide={this.logOutGuide} />;
    } else if (guestAuthenticated) {
      return <GuestNav logOutGuest={this.logOutGuest} />;
    } else {
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
              <Link to="/guide" className="nav__link">
                Guide
              </Link>
            </li>
            <li>
              <Link to="/guest" className="nav__link">
                Guest
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth,
  guestAuth: state.guestAuth
});

export default connect(
  mapStateToProps,
  { guideLogoutAction, guestLogoutAction }
)(Navbar);

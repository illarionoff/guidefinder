import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { guideLogoutAction } from "../../actions/guideAuthActions";
// Reirect from actions

export class Navbar extends Component {
  logOut = () => {
    this.props.guideLogoutAction();
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;

    if (isAuthenticated) {
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
              <Link to="/" className="nav__link" onClick={this.logOut}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      );
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
              <Link to="/guide/login" className="nav__link">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth
});

export default connect(
  mapStateToProps,
  { guideLogoutAction }
)(Navbar);

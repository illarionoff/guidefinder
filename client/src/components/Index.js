import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { guideLogoutAction } from "../actions/guideAuthActions";

class Index extends Component {
  logOut = () => {
    this.props.guideLogoutAction();
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    return (
      <div className="index">
        {!isAuthenticated ? (
          <div className="box">
            <button>
              <Link to="/guide/login">Login</Link>
            </button>
            <button>
              <Link to="/guide/register">Register</Link>
            </button>
          </div>
        ) : (
          <button onClick={this.logOut}>Logout</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth
});

export default connect(
  mapStateToProps,
  { guideLogoutAction }
)(Index);

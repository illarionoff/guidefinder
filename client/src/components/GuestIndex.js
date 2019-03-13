import React, { Component } from "react";
import { connect } from "react-redux";
import { guestLogoutAction } from "../actions/guestAuthActions";
import Form from "./Form";
import GuestMain from "./GuestMain";

class GuestIndex extends Component {
  logOut = () => {
    this.props.guestLogoutAction();
  };

  render() {
    const { guestAuthenticated } = this.props.guestAuth;
    return (
      <div className="index">
        {!guestAuthenticated ? (
          <Form login="/guest/login" register="/guest/register" />
        ) : (
          <GuestMain logOut={this.logOut} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  guestAuth: state.guestAuth
});

export default connect(
  mapStateToProps,
  { guestLogoutAction }
)(GuestIndex);

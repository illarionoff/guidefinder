import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MainIndexContent from "./MainIndexContent";

class MainIndex extends Component {
  render() {
    const { isAuthenticated } = this.props.guideAuth;
    const { guestAuthenticated } = this.props.guestAuth;

    if (isAuthenticated) {
      return <Redirect to="/guide/myprofile" />;
    } else if (guestAuthenticated) {
      return <Redirect to="/guest" />;
    } else {
      return <MainIndexContent />;
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth,
  guestAuth: state.guestAuth
});

export default connect(mapStateToProps)(MainIndex);

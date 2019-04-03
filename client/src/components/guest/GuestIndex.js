import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class GuideIndex extends Component {
  render() {
    const { guestAuthenticated } = this.props.guestAuth;

    if (!guestAuthenticated) {
      return <Redirect to="/guest/login" />;
    } else {
      return <Redirect to="/guest/alltours" />;
    }
  }
}

const mapStateToProps = state => ({
  guestAuth: state.guestAuth
});

export default connect(mapStateToProps)(GuideIndex);

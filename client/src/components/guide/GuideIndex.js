import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { guideLogoutAction } from "../../actions/guideAuthActions";
class GuideIndex extends Component {
  logOut = () => {
    this.props.guideLogoutAction();
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;

    if (!isAuthenticated) {
      return <Redirect to="/guide/login" />;
    } else {
      return <Redirect to="/guide/myprofile" />;
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth
});

export default connect(
  mapStateToProps,
  { guideLogoutAction }
)(GuideIndex);

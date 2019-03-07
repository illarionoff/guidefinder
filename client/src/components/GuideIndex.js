import React, { Component } from "react";
import { connect } from "react-redux";
import { guideLogoutAction } from "../actions/guideAuthActions";
import Form from "./Form";
import GuideMain from "./GuideMain";

class GuideIndex extends Component {
  logOut = () => {
    this.props.guideLogoutAction();
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    return (
      <div className="index">
        {!isAuthenticated ? (
          <Form login="/guide/login" register="/guide/register" />
        ) : (
          <GuideMain logOut={this.logOut} />
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
)(GuideIndex);

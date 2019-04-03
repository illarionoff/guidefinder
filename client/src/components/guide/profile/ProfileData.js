import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import NoProfile from "./NoProfile";
import MyProfile from "./MyProfile";
import Menu from "../Menu";
import Loading from "../../Loading";

import { getCurrentProfile } from "../../../actions/guideProfileActions";

class ProfileData extends Component {
  componentDidMount = () => {
    this.props.getCurrentProfile();
  };
  render() {
    const { isAuthenticated } = this.props.guideAuth;
    const { profile, loading } = this.props.guideProfile;

    if (!isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      let profileContent;
      if (profile === null || loading) {
        profileContent = (
          <>
            <Menu />
            <Loading />
          </>
        );
      } else {
        if (Object.keys(profile).length > 0) {
          profileContent = (
            <>
              <Menu />
              <MyProfile profile={profile} />
            </>
          );
        } else {
          profileContent = (
            <>
              <Menu />
              <NoProfile />
            </>
          );
        }
      }
      return <>{profileContent}</>;
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth,
  guideProfile: state.guideProfile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(ProfileData);

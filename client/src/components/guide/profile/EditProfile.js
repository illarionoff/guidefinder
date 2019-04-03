import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import Menu from "../Menu";
import Loading from "../../Loading";
import EditMyProfile from "./EditMyProfile";
import NoProfile from "./NoProfile";

// Actions
import {
  addProfile,
  getCurrentProfile
} from "../../../actions/guideProfileActions";

export class EditProfile extends Component {
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
              <EditMyProfile profile={profile} />
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
  { addProfile, getCurrentProfile }
)(withRouter(EditProfile));

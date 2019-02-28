import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/guideProfileActions";

import Tours from "../tours/Tours";

export class Myprofile extends Component {
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
        profileContent = <h1>Loading...</h1>;
      } else {
        // Check if logged in user has profile data
        if (Object.keys(profile).length > 0) {
          profileContent = (
            <section>
              <div className="profile">
                <h1>{profile.handle}</h1>
                <h2>{profile.age}</h2>
                <h2>{profile.country}</h2>
                <h2>{profile.city}</h2>
                <h2>{profile.bio}</h2>
                {Object.keys(profile.social.facebook).length > 0 ? (
                  <h2>Facebok : {profile.social.facebook}</h2>
                ) : (
                  <h2>Facebok : -</h2>
                )}
                {Object.keys(profile.social.twitter).length > 0 ? (
                  <h2>Twitter : {profile.social.twitter}</h2>
                ) : (
                  <h2>Twitter : -</h2>
                )}
                {Object.keys(profile.social.instagram).length > 0 ? (
                  <h2>Instagram : {profile.social.instagram}</h2>
                ) : (
                  <h2>Instagram : -</h2>
                )}
                {Object.keys(profile.social.linkedin).length > 0 ? (
                  <h2>Linkedin : {profile.social.linkedin}</h2>
                ) : (
                  <h2>Linkedin : -</h2>
                )}
                {Object.keys(profile.social.youtube).length > 0 ? (
                  <h2>Youtube : {profile.social.youtube}</h2>
                ) : (
                  <h2>Youtube : -</h2>
                )}
                <Link to="/guide/editprofile">Edit</Link>
              </div>
              <div className="posts">
                <Tours />
              </div>
            </section>
          );
        } else {
          // User has no profile
          profileContent = (
            <div>
              <p className="lead text-muted">Welcome</p>
              <p>You have no profile. Please add info.</p>
              <Link to="/guide/createprofile">CREATE PROFILE</Link>
            </div>
          );
        }
      }
      return <div>{profileContent}</div>;
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
)(Myprofile);

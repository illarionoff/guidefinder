import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/guideProfileActions";
import { getTours } from "../../../actions/guideToursActions";

import Tours from "../tours/Tours";
import ProfileData from "./ProfileData";
import NoProfile from "./NoProfile";

export class Myprofile extends Component {
  componentDidMount = () => {
    this.props.getCurrentProfile();
    this.props.getTours();
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    const { profile, loading } = this.props.guideProfile;
    const { tours, toursLoading } = this.props.guideTours;

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
              <ProfileData
                handle={profile.handle}
                age={profile.age}
                country={profile.country}
                city={profile.city}
                bio={profile.bio}
                facebook={profile.social.facebook}
                twitter={profile.social.twitter}
                instagram={profile.social.instagram}
                linkedin={profile.social.likedin}
                youtube={profile.social.youtube}
              />
              <Tours tours={tours} toursLoading={toursLoading} />
            </section>
          );
        } else {
          profileContent = <NoProfile />;
        }
      }
      return <div>{profileContent}</div>;
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth,
  guideProfile: state.guideProfile,
  guideTours: state.guideTours
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getTours }
)(Myprofile);

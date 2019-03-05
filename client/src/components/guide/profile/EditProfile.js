import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

// Actions
import { addProfile } from "../../../actions/guideProfileActions";

export class EditProfile extends Component {
  state = {
    handle: this.props.guideProfile.profile.handle,
    age: this.props.guideProfile.profile.age,
    country: this.props.guideProfile.profile.country,
    city: this.props.guideProfile.profile.city,
    bio: this.props.guideProfile.profile.bio,
    facebook: this.props.guideProfile.profile.social.facebook,
    twitter: this.props.guideProfile.profile.social.twitter,
    instagram: this.props.guideProfile.profile.social.instagram,
    linkedin: this.props.guideProfile.profile.social.linkedin,
    youtube: this.props.guideProfile.profile.social.youtube
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClickSubmit = e => {
    e.preventDefault();
    let userData = {};
    userData.handle = this.state.handle;
    userData.age = this.state.age;
    userData.country = this.state.country;
    userData.city = this.state.city;
    userData.bio = this.state.bio;
    userData.facebook = this.state.facebook;
    userData.twitter = this.state.twitter;
    userData.instagram = this.state.instagram;
    userData.linkedin = this.state.linkedin;
    userData.youtube = this.state.youtube;
    this.props.addProfile(userData, this.props.history);
  };

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="login-page">
          <div className="form">
            <form className="register-form" onSubmit={this.onClickSubmit}>
              <input
                value={this.state.handle}
                onChange={this.onChange}
                name="handle"
                type="text"
                placeholder="handle"
              />
              <input
                value={this.state.age}
                onChange={this.onChange}
                name="age"
                type="text"
                placeholder="age"
              />
              <input
                value={this.state.country}
                onChange={this.onChange}
                name="country"
                type="text"
                placeholder="country"
              />
              <input
                value={this.state.city}
                onChange={this.onChange}
                name="city"
                type="text"
                placeholder="city"
              />
              <input
                value={this.state.bio}
                onChange={this.onChange}
                name="bio"
                type="text"
                placeholder="bio"
              />
              <input
                value={this.state.facebook}
                onChange={this.onChange}
                name="facebook"
                type="text"
                placeholder="facebook"
              />
              <input
                value={this.state.twitter}
                onChange={this.onChange}
                name="twitter"
                type="text"
                placeholder="twitter"
              />
              <input
                value={this.state.instagram}
                onChange={this.onChange}
                name="instagram"
                type="text"
                placeholder="instagram"
              />
              <input
                value={this.state.linkedin}
                onChange={this.onChange}
                name="linkedin"
                type="text"
                placeholder="linkedin"
              />
              <input
                value={this.state.youtube}
                onChange={this.onChange}
                name="youtube"
                type="text"
                placeholder="youtube"
              />
              <button>update profile</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth,
  guideProfile: state.guideProfile
});

export default connect(
  mapStateToProps,
  { addProfile }
)(withRouter(EditProfile));

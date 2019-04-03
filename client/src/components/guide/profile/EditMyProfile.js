import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import {
  getCurrentProfile,
  addProfile
} from "../../../actions/guideProfileActions";

class EditMyProfile extends Component {
  state = {
    handle: this.props.profile.handle,
    age: this.props.profile.age,
    country: this.props.profile.country,
    region: this.props.profile.region,
    city: this.props.profile.city,
    bio: this.props.profile.bio,
    facebook: this.props.profile.social.facebook,
    twitter: this.props.profile.social.twitter,
    instagram: this.props.profile.social.instagram,
    linkedin: this.props.profile.social.linkedin,
    youtube: this.props.profile.social.youtube
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
    userData.region = this.state.region;
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
    return (
      <main className="page page--eighty">
        <div className="wrap">
          <h1>Edit Profile</h1>

          <form className="register-form" onSubmit={this.onClickSubmit}>
            <input
              className="register-form__handle"
              value={this.state.handle}
              onChange={this.onChange}
              name="handle"
              type="text"
              placeholder="handle"
              disabled
            />
            <input
              className="register-form__age"
              value={this.state.age}
              onChange={this.onChange}
              name="age"
              type="text"
              placeholder="age"
              disabled
            />
            <input
              className="register-form__country"
              value={this.state.country}
              onChange={this.onChange}
              name="country"
              type="text"
              placeholder="country"
              disabled
            />
            <input
              className="register-form__region"
              value={this.state.region}
              onChange={this.onChange}
              name="region"
              type="text"
              placeholder="region"
              disabled
            />
            <input
              className="register-form__city"
              value={this.state.city}
              onChange={this.onChange}
              name="city"
              type="text"
              placeholder="city"
            />
            <textarea
              className="register-form__bio"
              value={this.state.bio}
              onChange={this.onChange}
              name="bio"
              placeholder="bio"
            />
            <input
              className="register-form__social"
              value={this.state.facebook}
              onChange={this.onChange}
              name="facebook"
              type="text"
              placeholder="facebook"
            />
            <input
              className="register-form__social"
              value={this.state.twitter}
              onChange={this.onChange}
              name="twitter"
              type="text"
              placeholder="twitter"
            />
            <input
              className="register-form__social"
              value={this.state.instagram}
              onChange={this.onChange}
              name="instagram"
              type="text"
              placeholder="instagram"
            />
            <input
              className="register-form__social"
              value={this.state.linkedin}
              onChange={this.onChange}
              name="linkedin"
              type="text"
              placeholder="linkedin"
            />
            <input
              className="register-form__social"
              value={this.state.youtube}
              onChange={this.onChange}
              name="youtube"
              type="text"
              placeholder="youtube"
            />
            <button className="btn btn--success">UPDATE PROFILE</button>
          </form>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  guideProfile: state.guideProfile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, addProfile }
)(withRouter(EditMyProfile));

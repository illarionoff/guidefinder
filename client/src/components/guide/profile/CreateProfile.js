import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import {
  CountryDropdown,
  RegionDropdown
} from "react-country-region-selector";
import Menu from "../Menu";
// Actions
import { addProfile } from "../../../actions/guideProfileActions";

export class CreateProfile extends Component {
  state = {
    handle: "",
    age: "",
    country: "",
    region: "",
    city: "",
    bio: "",
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { isAuthenticated } = this.props.guideAuth;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      return (
        <>
          <Menu />
          <main className="page page--eighty">
            <div className="wrap">
              <h1>Create Profile</h1>

              <form
                className="register-form"
                onSubmit={this.onClickSubmit}
                style={{ display: "flex", flexDirection: "column" }}
              >
                {this.state.errors.handle ? (
                  <label htmlFor="handle">{this.state.errors.handle}</label>
                ) : null}
                <input
                  className="register-form__handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  name="handle"
                  type="text"
                  placeholder="handle"
                />
                {this.state.errors.age ? (
                  <label htmlFor="age">{this.state.errors.age}</label>
                ) : null}
                <input
                  className="register-form__age"
                  value={this.state.age}
                  onChange={this.onChange}
                  name="age"
                  type="text"
                  placeholder="age"
                />
                {this.state.errors.country ? (
                  <label htmlFor="country">{this.state.errors.country}</label>
                ) : null}
                <CountryDropdown
                  className="register-form__country"
                  name="country"
                  value={this.state.country}
                  onChange={val => this.selectCountry(val)}
                />
                {this.state.errors.region ? (
                  <label htmlFor="region">{this.state.errors.region}</label>
                ) : null}
                <RegionDropdown
                  className="register-form__region"
                  country={this.state.country}
                  name="region"
                  value={this.state.region}
                  onChange={val => this.selectRegion(val)}
                />
                {this.state.errors.city ? (
                  <label htmlFor="city">{this.state.errors.city}</label>
                ) : null}
                <input
                  className="register-form__city"
                  value={this.state.city}
                  onChange={this.onChange}
                  name="city"
                  type="text"
                  placeholder="city"
                />
                {this.state.errors.bio ? (
                  <label htmlFor="bio">{this.state.errors.bio}</label>
                ) : null}
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
                <button className="btn btn--success">create profile</button>
              </form>
            </div>
          </main>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  guideAuth: state.guideAuth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addProfile }
)(withRouter(CreateProfile));

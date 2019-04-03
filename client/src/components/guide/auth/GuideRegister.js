import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerGuide } from "../../../actions/guideAuthActions";

export class GuideRegister extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    password2: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClickSubmit = e => {
    e.preventDefault();
    let userData = {};
    userData.email = this.state.email;
    userData.name = this.state.name;
    userData.password = this.state.password;
    userData.password2 = this.state.password2;
    this.props.registerGuide(userData, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <h2>Guide Register</h2>
          <form className="register-form" onSubmit={this.onClickSubmit}>
            {this.state.errors.name ? (
              <label htmlFor="name">{this.state.errors.name}</label>
            ) : null}
            <input
              value={this.state.name}
              onChange={this.onChange}
              name="name"
              type="text"
              placeholder="name"
            />
            {this.state.errors.email ? (
              <label htmlFor="email">{this.state.errors.email}</label>
            ) : null}
            <input
              value={this.state.email}
              onChange={this.onChange}
              name="email"
              type="email"
              placeholder="email address"
            />
            {this.state.errors.password ? (
              <label htmlFor="password">{this.state.errors.password}</label>
            ) : null}
            <input
              value={this.state.password}
              onChange={this.onChange}
              name="password"
              type="password"
              placeholder="password"
            />
            {this.state.errors.password2 ? (
              <label htmlFor="password2">{this.state.errors.password2}</label>
            ) : null}
            <input
              value={this.state.password2}
              onChange={this.onChange}
              name="password2"
              type="password"
              placeholder="confirm password"
            />
            <button className="btn btn--success">create</button>
            <p className="message">
              Already registered? <Link to="/guide/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerGuide }
)(withRouter(GuideRegister));

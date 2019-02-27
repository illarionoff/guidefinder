import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { guideLoginAction } from "../../../actions/guideAuthActions";

export class GuideLogin extends Component {
  state = {
    email: "",
    password: ""
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
    userData.password = this.state.password;
    console.log(this.props);
    this.props.guideLoginAction(userData);
  };

  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={this.onClickSubmit}>
            <input
              value={this.state.email}
              onChange={this.onChange}
              name="email"
              type="email"
              placeholder="username"
            />
            <input
              value={this.state.password}
              onChange={this.onChange}
              name="password"
              type="password"
              placeholder="password"
            />
            <button>login</button>
            <p className="message">
              Not registered?{" "}
              <Link to="/guide/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { guideLoginAction }
)(GuideLogin);

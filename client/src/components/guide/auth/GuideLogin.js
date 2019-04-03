import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Reirect from actions
import { withRouter } from "react-router-dom";

// Actions
import { guideLoginAction } from "../../../actions/guideAuthActions";

export class GuideLogin extends Component {
  state = {
    email: "",
    password: "",
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
    userData.password = this.state.password;
    console.log(this.props);
    this.props.guideLoginAction(userData, this.props.history);
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
          <h2>Guide Login</h2>
          <form className="login-form" onSubmit={this.onClickSubmit}>
            {this.state.errors.email ? (
              <label htmlFor="email">{this.state.errors.email}</label>
            ) : null}
            <input
              value={this.state.email}
              onChange={this.onChange}
              name="email"
              type="email"
              placeholder="username"
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
            <button className="btn btn--success">login</button>
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

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { guideLoginAction }
)(withRouter(GuideLogin));

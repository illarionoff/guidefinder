import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class GuideRegister extends Component {
  state = {
    email: "",
    name: "",
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
    userData.name = this.state.name;
    userData.password = this.state.password;
    console.log(userData);
    axios
      .post("/api/guides/register", userData)
      .then(res => this.props.history.push("/guide/login"))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="login-page">
        <div className="form">
          <form className="register-form" onSubmit={this.onClickSubmit}>
            <input
              value={this.state.name}
              onChange={this.onChange}
              name="name"
              type="text"
              placeholder="name"
            />
            <input
              value={this.state.email}
              onChange={this.onChange}
              name="email"
              type="email"
              placeholder="email address"
            />
            <input
              value={this.state.password}
              onChange={this.onChange}
              name="password"
              type="password"
              placeholder="password"
            />
            <button>create</button>
            <p className="message">
              Already registered? <Link to="guide/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default GuideRegister;

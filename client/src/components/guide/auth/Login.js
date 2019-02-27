import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Login extends Component {
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
    console.log(userData);
    axios
      .post("/api/guides/login", userData)
      .then(res => {
        console.log(res);
        // save to local srtorage
        // const { token } = res.data;
        // // Set token to localstorage
        // localStorage.setItem("jwtToken", token);
        // // Set token to auth header
        // setAuthToken(token);
        // // Decode token to get user data
        // const decoded = jwt_decode(token);
        // // set current user
        // dispatch(setCurrentUser(decoded));
      })
      .catch(err => console.log(err));
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
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

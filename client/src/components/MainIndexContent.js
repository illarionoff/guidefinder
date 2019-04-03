import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MainIndexContent extends Component {
  render() {
    return (
      <main className="page page--hundred">
        <div className="wrap">
          <div className="main">
            <div className="main__buttons">
              <button className="btn btn--success">
                <Link to="/guide/login">SIGN IN AS GUIDE</Link>
              </button>
              <h2>OR</h2>
              <button className="btn btn--success">
                <Link to="/guest/login">SIGN IN AS GUEST</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

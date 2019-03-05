import React, { Component } from "react";
import { Link } from "react-router-dom";

class GuideIndex extends Component {
  render() {
    return (
      <div className="index">
        <div className="box">
          <button>
            <Link to="/guest/login">Login</Link>
          </button>
          <button>
            <Link to="/guest/register">Register</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default GuideIndex;

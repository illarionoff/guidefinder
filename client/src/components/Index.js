import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="index">
      <div className="box">
        <button>
          <Link to="/login">Login</Link>
        </button>
        <button>
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}

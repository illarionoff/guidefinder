import React from "react";
import { Link } from "react-router-dom";

export default function Form(props) {
  const { login, register } = props;
  return (
    <div className="box">
      <button>
        <Link to={login}>Login</Link>
      </button>
      <button>
        <Link to={register}>Register</Link>
      </button>
    </div>
  );
}

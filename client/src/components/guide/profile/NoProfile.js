import React from "react";
import { Link } from "react-router-dom";

export default function NoProfile() {
  return (
    <main className="page page--eighty">
      <div className="wrap">
        <h1>NO PROFILE</h1>
        <p className="lead text-muted">Welcome</p>
        <p>You have no profile. Please add info.</p>
        <Link to="/guide/createprofile">CREATE PROFILE</Link>
      </div>
    </main>
  );
}

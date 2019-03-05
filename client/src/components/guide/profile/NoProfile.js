import React from "react";
import { Link } from "react-router-dom";

export default function NoProfile() {
  return (
    <section>
      <p className="lead text-muted">Welcome</p>
      <p>You have no profile. Please add info.</p>
      <Link to="/guide/createprofile">CREATE PROFILE</Link>
    </section>
  );
}

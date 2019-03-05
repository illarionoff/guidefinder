import React from "react";
import { Link } from "react-router-dom";

export default function MainIndex() {
  return (
    <div>
      <Link to="/guide">Guide Entrance</Link>
      <br />
      <Link to="/guest">Guest Entrance</Link>
    </div>
  );
}

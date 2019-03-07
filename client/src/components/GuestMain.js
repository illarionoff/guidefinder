import React from "react";

export default function GuestMain(props) {
  return (
    <div>
      <h2>Guest main page</h2>
      <button onClick={props.logOut}>Logout</button>
    </div>
  );
}

import React from "react";

export default function GuideMain(props) {
  return (
    <div>
      <h2>Guide main page</h2>
      <button onClick={props.logOut}>Logout</button>
    </div>
  );
}

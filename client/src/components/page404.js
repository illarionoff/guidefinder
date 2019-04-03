import React from "react";

export default function page404(props) {
  return (
    <div>
      <button onClick={() => props.history.goBack()}>GO BACK</button>
      <h1>404 Page does not exist</h1>
    </div>
  );
}

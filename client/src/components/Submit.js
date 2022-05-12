import React from "react";
import { useState } from "react";

function Submit({ clipData, setClipData }) {
  const [usersClip, setUsersClip] = useState("");
  function handlePostRequestForGygUrl(e) {
    e.preventDefault();
    fetch("/clips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clip_url: usersClip,
        clip_owner: "placeholder",
      }),
    });
  }
  return (
    <div className="form-box">
      <form className="form" onSubmit={handlePostRequestForGygUrl}>
        <div className="field1">
          <input
            id="gyg-url"
            placeholder="Post your clip"
            onChange={(e) => setUsersClip(e.target.value)}
          />
        </div>
        <br></br>
        <br></br>
        <center>
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </center>
      </form>
    </div>
  );
}

export default Submit;

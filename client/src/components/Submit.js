import React from "react";
import { useState } from "react";

function Submit({ currentUser }) {
  const [usersClip, setUsersClip] = useState("");
  // console.log(currentUser)
  function handlePostRequestForGygUrl(e) {
    if (currentUser == null) {
      alert("Please login or create an account.");
    } else {
      fetch("/clips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clip_url: usersClip,
          user_id: currentUser.id,
        }),
      });
    }
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

import React from "react";
import { useState } from "react";

function CreateLogin() {
  const [newUser, setNewUser] = useState({
    newUsername: "",
    newPassword: "",
  });
  
  const handleOnChangeNewUser = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  function handleCreateNewUser(e) {
    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify({
        username: newUser.newUsername,
        password: newUser.newPassword
      })
    })
    // window.location.href=('http://localhost:4000/login')
  }

  return (
    <div className="login-page">
      <div className="log-form">
        <form className="register-form" onSubmit={handleCreateNewUser}>
          <input
            name="newUsername"
            className="login-input"
            id="signUp"
            onChange={handleOnChangeNewUser}
            type="text"
            placeholder="create username"
          ></input>
          <input
            name="newPassword"
            className="login-input"
            id="signUpPassword"
            onChange={handleOnChangeNewUser}
            type="password"
            placeholder="create password"
          ></input>
          <button className="form-button" type="submit">
            Submit
          </button>
          <p className="sign-message">
            Already registered?{" "}
            <a href="http://localhost:4000/login">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default CreateLogin
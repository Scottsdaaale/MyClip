import React, { useState } from "react";

import { Link } from "react-router-dom";
function Login({ setCurrentUser, currentUser }) {
  const [userToLogin, setUserToLogin] = useState({
    username: "",
    password: "",
  });
  // console.log(currentUser.error);
  const handleLogin = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userToLogin),
    })
      .then((r) => r.json())
      .then((data) => setCurrentUser(data));
  };
  // if(currentUser.error == currentUser.error){
  //   alert('Wrong login try again')
  // }

  const handleOnChangeUserLogin = (e) => {
    setUserToLogin({ ...userToLogin, [e.target.name]: e.target.value });
  };
  const handleRenderEditAccount=() => {
    if (currentUser !== null){
      return(
        <Link to="edit-account" className="sign-message">Edit account</Link>
      )
    }
  }

  return (
    <div className="login-page">
      <div className="log-form">
        {currentUser ? (
          <h1 className="welcome-user">Welcome, {currentUser.username}!</h1>
        ) : (
          <></>
        )}
        <form onSubmit={handleLogin}>
          <input
            name="username"
            className="login-input"
            onChange={handleOnChangeUserLogin}
            id="signIn"
            type="text"
            placeholder="username"
          ></input>
          <input
            name="password"
            className="login-input"
            onChange={handleOnChangeUserLogin}
            id="loginPassword"
            type="password"
            placeholder="password"
          ></input>
          <button className="form-button" type="submit">
            Submit
          </button>
          <p className="sign-message">
            Not registered?
            <Link to="create-account"> Create an account</Link>
          </p>
          <br></br>
          {handleRenderEditAccount()}
        </form>
      </div>
    </div>
  );
}

export default Login;

import React from 'react'
import { useState } from "react";

function CreateLogin() {
  return (
    <div className="login-page">
      <div className="log-form">
        <form 
          className="register-form" 
          // onSubmit={signUpFormSubmitHandler}
        >
          // {/* <label className="login-label" htmlFor='signUpUsername'>Create Username </label> */}
          <input
            className="login-input"
            id="signUp"
            // onChange={(e) => setNewUser(e.target.value)}
            type="text"
            placeholder="create username"
          ></input>
          {/* <label className="login-label" htmlFor='signUpPassword'>Create Password</label> */}
          <input
            className="login-input"
            id="signUpPassword"
            // onChange={(e) => setNewUserPassword(e.target.value)}
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
  );
}


export default CreateLogin
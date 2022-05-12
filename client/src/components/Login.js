import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div className="login-page">
      <div className="log-form">
        <form 
        // onSubmit={loginSubmitHandler}
        >
           {/* <label className="login-label" htmlFor="signIn">Username</label> */}
          <input
            className="login-input"
            // onChange={handleUsernameLogin}
            id="signIn"
            type="text"
            placeholder="username"
          >
          </input>
          {/* <label className="login-label" htmlFor='loginPassword'>Password</label> */}
          <input
            className="login-input"
            // onChange={handlePasswordLogin}
            id="loginPassword"
            type="password"
            placeholder="password"
          >

          </input>
          <button className="form-button" type="submit">
            Submit
          </button>
          <p className="sign-message">
            Not registered? 
            <Link to="create-account">Create an account</Link>
          </p>
        </form>
      </div>
      {/* <button onClick={(e)=>{handleDelete(currentUser)}}></button> */}
      {/* <button onClick={(e)=>{handleEdit(currentUser)}}></button> */}
    </div>
  );
}

export default Login
import React, {useState} from 'react'

function EditAccount({currentUser}) {

  const [usernameToUpdate, setUsernameToUpdate] = useState('')
  // console.log(currentUser.username)
  const handleOnChangeLoginChange=(e)=>{
    setUsernameToUpdate(e.target.value)
    
  }

  const handleUpdateUsername=()=>{
    // e.preventDefault()
    fetch(`/users/${currentUser.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username: usernameToUpdate})
    })
    .then(r=>r.json())
    .then(data=>console.log(data))

  }


  return (
    <div className="login-page">
      <div className="log-form">
        <form onSubmit={handleUpdateUsername}>
          <input
            name="username"
            className="login-input"
            onChange={handleOnChangeLoginChange}
            id="signIn"
            type="text"
            placeholder="change username"
          ></input>
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditAccount
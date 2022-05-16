import React from 'react'
import ClipCard from './ClipCard'
function Body({currentUser}) {

  return (
    <div id="body">
        <ClipCard currentUser={currentUser}/>
    </div>
  )
}

export default Body
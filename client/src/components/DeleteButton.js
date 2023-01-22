import React from 'react'

function DeleteButton({setClipData, clipData, clipObject}) {
    // const clipWeWantToDelete = clipObject.id
    // const clipWeWantToDelete = Object.entries(clipObject)
    // console.log(clipWeWantToDelete)
    
    const handleDeleteClip = (clipToDelete) => {
      console.log(clipToDelete.id)
      const id = clipToDelete.id
      console.log(id)
        fetch(`/clips/${clipObject.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then((r) => {
              let resultOfFilter = clipData.filter((eachClip) => {
                if(eachClip.id !== id){
                  return eachClip
                }
              })
                setClipData([...resultOfFilter])
            });
    };

  return (
    <button className="delete-clip" onClick={(e) => {handleDeleteClip(clipObject)}}>Delete</button>
  )
}

export default DeleteButton
import React from 'react'
import ClipCard from './ClipCard'
function Body({
  // commentData,
  // setCommentData,
  setClipData,
  clipData,
  currentUser,
  switchFetches, 
  setSwitchFetches
}) {
  // if(clipData.length > 0) {
  //   console.log(clipData[1].clip_url)
  // }
  // 
  return (
    <div id="body">        
        <ClipCard 
          currentUser={currentUser}
          // commentData={commentData} 
          // setCommentData={setCommentData}
          clipData={clipData} 
          setClipData={setClipData}
          switchFetches={switchFetches}
          setSwitchFetches={setSwitchFetches}
        />

    </div>
  )
}

export default Body
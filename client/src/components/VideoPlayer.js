import React from 'react'
import StarRating from './StarRating' 
function VideoPlayer() {
    // console.log(videoLink)
    const gygLink = "https://www.gifyourgame.com/UnbackedTinglyEnuo"
    function findTypeOfLink(link){
        if (link.includes('http'))
            return link.split()
        else
            return link.split('/')[1]
            
    }
    // function getTextAfterForwardSlash(link){
    //     return link.split('/')[1]
    // }
  return (
    <div id="video-player-div">
        
        <center id='center'> 
            <h1 id="username-on-clip">User's Clip</h1>
            <video className="video-player" width="750" controls loop>
                <source src={`https://media.gifyourgame.com/${findTypeOfLink(gygLink)}_720p.mp4`} type="video/mp4"/>
            </video>
            <StarRating/>
        </center>

   </div>
  )
}

export default VideoPlayer

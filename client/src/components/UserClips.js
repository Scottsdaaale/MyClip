import React, { useState, useEffect } from "react";
import UserVideoPlayer from "./UserVideoPlayer";
function UserClips({
  // commentData,
  // setCommentData,
  setClipData,
  clipData,
  currentUser,
  
}) {
  // const iteratedObjects=clipData.forEach((clipObject)=>{

  // })

  let filterCurrentUsersClips = [];

  if (currentUser !== null) {
    filterCurrentUsersClips = clipData.filter((eachObject) => {
      if (eachObject.clip_owner === currentUser.username) {
        return eachObject;
      }
    });
  }

  

  function mapCurrentUserClips() {
    return(
      filterCurrentUsersClips.map((eachCurrentUserClip) => {
      console.log(eachCurrentUserClip.clip_url);
      return (
        <div className="video-rating-container">
          <UserVideoPlayer
            clipObject={eachCurrentUserClip}
            clipData={clipData}
            currentUser={currentUser}
            setClipData={setClipData}
          />
        </div>
      )
    })
    )
  }

  // function findTypeOfLink(link) {
  //   if (link.includes("http")) return link.split("/")[3];
  //   else return link.split("/")[1];
  // }
  // function mapCurrentUserClips() {
  //   return filterCurrentUsersClips.map((eachCurrentUserClip) => {
  //     // console.log(eachCurrentUserClip.clip_url);
  //     const gygLink = eachCurrentUserClip.clip_url;
  //     return (
  //       <div className="video-rating-container">
  //         <center>
  //           <video className="video-player" width="750" controls loop>
  //             <source
  //               src={`https://media.gifyourgame.com/${findTypeOfLink(
  //                 gygLink
  //               )}_720p.mp4`}
  //               type="video/mp4"
  //             />
  //           </video>
  //         </center>
  //         <h1>fuck2</h1>
  //       </div>
  //     );
  //   });
  // }

  return (
    <div>
      {mapCurrentUserClips()}
    </div>
  );
}

export default UserClips;

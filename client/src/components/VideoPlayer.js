import React from "react";
import StarRating from "./StarRating";
import DeleteButton from "./DeleteButton";
import Comments from "./Comments";
function VideoPlayer({ 
  // commentData,
  // setCommentData,
  setClipData,
  clipData,
  clipObject,
  currentUser
})
{

  const gygLink = clipObject.clip_url;
  
  const usersClip = clipObject.clip_owner;

  //if link has "http" in it split the string at the 3rd "/" else split at the 1st "/"
  function findTypeOfLink(link) {
    if (link.includes("http")) return link.split("/")[3];
    else return link.split("/")[1];
  }

  return (
    <div id="video-player-div">
      <center id="center">
        <h1 id="username-on-clip">{usersClip}</h1>
        <video className="video-player" width="750" controls loop>
          <source
            src={`https://media.gifyourgame.com/${findTypeOfLink(
              gygLink
            )}_720p.mp4`}
            type="video/mp4"
          />
        </video>
      </center>
      <StarRating
        id="stars"
        currentUser={currentUser}
        clipObject={clipObject}
        
        // ratingsAverageRounded={ratingsAverageRounded}
      />
      {/* <h1 id="sum-of-ratings">avg stars: {ratingsAverageRounded}</h1> */}
      {currentUser && clipObject.clip_owner === currentUser.username ? (
        <DeleteButton
          setClipData={setClipData}
          clipData={clipData}
          clipObject={clipObject}
        />
      ) : (
        <button className="space-for-delete-clip-btn">Delete</button>
      )}
      <Comments
        key={clipObject.id}
        clipObject={clipObject}
        currentUser={currentUser}
      />
    </div>
  );
}

export default VideoPlayer;

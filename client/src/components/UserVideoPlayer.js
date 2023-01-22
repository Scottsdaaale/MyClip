import React from "react";
import StarRating from "./StarRating";
import DeleteButton from "./DeleteButton";
import Comments from "./Comments";
function UserVideoPlayer({ 
  // commentData,
  // setCommentData,

  setClipData,
  clipData,
  clipObject,
  currentUser 
}) 
{
  
  // console.log(eachCurrentUserClip);

  const gygLink = clipObject.clip_url;
  // const ratingsData = clipObject.ratings;
  const usersClip = clipObject.clip_owner;
  // console.log(clipObject.comments)

  //adds number_of_stars in each object
  // const sumOfRatings = ratingsData.reduce(
  //   (sum, current) => sum + current.number_of_stars,
  //   0
  // );

  // let ratingsAverageRounded = 0;
  // if (ratingsData.length !== 0) {
  //   //gets average of ratings
  //   const ratingsAverage = sumOfRatings / ratingsData.length;

  //   //rounds average up to the next tenth
  //   ratingsAverageRounded = Math.round(ratingsAverage * 10) / 10;
  // }
  //if link has "http" in it split the string at the 3rd "/" else split at the 1st "/"
  function findTypeOfLink(link) {
    console.log(link)
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
      />
      {/* <h1 id="sum-of-ratings">avg stars: {ratingsAverageRounded}</h1> */}
      {currentUser && clipObject.clip_owner === currentUser.username ? (
        <DeleteButton
          setClipData={setClipData}
          clipData={clipData}
          clipObject={clipObject}
        />
      ) : (
        <div className="space-for-delete-clip-btn"></div>
      )}
      <Comments
        // commentData={commentData}
        // setCommentData={setCommentData}
        clipObject={clipObject}
        currentUser={currentUser}
      />
    </div>
  );
}

export default UserVideoPlayer;

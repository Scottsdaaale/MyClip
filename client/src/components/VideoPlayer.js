import React from "react";
import StarRating from "./StarRating";
function VideoPlayer(clipObject) {
  const gygLink = clipObject.clip.clip_url;
  const ratingsData = clipObject.clip.ratings;
  const usersClip = clipObject.clip.clip_owner;

  //adds number_of_stars in each object
  const sumOfRatings = ratingsData.reduce(
    (sum, current) => sum + current.number_of_stars,
    0
  );
    
    let ratingsAverageRounded = 0
  if (ratingsData.length != 0)
    {
      //gets average of ratings
      const ratingsAverage = sumOfRatings / ratingsData.length;

      //rounds average up to the next tenth
      ratingsAverageRounded = Math.round(ratingsAverage * 10) / 10;
    }

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
            src={`https://media.gifyourgame.com/${findTypeOfLink(gygLink)}_720p.mp4`}
            type="video/mp4"
          />
        </video>
      </center>
      
        <StarRating id="stars" clipObject={clipObject} />
        <h1 id="sum-of-ratings">
          avg {ratingsAverageRounded} stars
        </h1>
      
      
    </div>
    
  );
}

export default VideoPlayer;

import React from "react";
import StarRating from "./StarRating";
function VideoPlayer(clipObject) {
  // console.log(videoLink)
  const gygLink = clipObject.clip.clip_url;
  const ratingsData = clipObject.clip.ratings;
  

  const sumOfRatings = ratingsData.reduce(
    (sum, current) => sum + current.number_of_stars,
    0
  );
  // console.log(sumOfRatings)
  // const ratingsAverage = ratingsData.length / sumOfRatings;

  function findTypeOfLink(link) {
    if (link.includes("http")) return link.split("/")[3];
    else return link.split("/")[1];
  }
  return (
    <div id="video-player-div">
      <center id="center">
        <h1 id="username-on-clip">User's Clip</h1>
        <video className="video-player" width="750" controls loop>
          <source
            src={`https://media.gifyourgame.com/${findTypeOfLink(
              gygLink
            )}_720p.mp4`}
            type="video/mp4"
          />
        </video>
        <StarRating />
        <h1 id="sum-of-ratings">{sumOfRatings}</h1>
      </center>
    </div>
  );
}

export default VideoPlayer;

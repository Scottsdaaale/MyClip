import React from "react";
import VideoPlayer from "./VideoPlayer";
import { useEffect, useState } from "react";
import "../App.css";
function ClipCard() {
  const [ratingData, setRatingData] = useState([]);
  const [clipData, setClipData] = useState([]);
  console.log(clipData)
  useEffect(() => {
    fetch("/clips")
      .then((r) => r.json())
      .then((data) => setClipData(data));
  }, []);
  return (
    <div className="video-cards">
        {clipData.map((clipObject) => {
          return (
            <div id="video-rating-container">
              <VideoPlayer key={clipObject.id} clip={clipObject} />
            </div>
          );
        })}
    </div>
  );
}

export default ClipCard;

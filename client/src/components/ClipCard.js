import React from "react";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Submit from "./Submit";
import "../App.css";

function ClipCard({clipData, setClipData}) {
  const [ratingData, setRatingData] = useState([]);

  function clipDataMapper(){ 
    return (
      clipData.map((clipObject) => {
        return (
          <div id="video-rating-container">
            <VideoPlayer key={clipObject.id} clip={clipObject} />
          </div>
        );
      })
    )
  }
  
  return (
    <div className="video-cards">
        <Submit setClipData={setClipData}/>
        {clipDataMapper()}
    </div>
  );
}

export default ClipCard;

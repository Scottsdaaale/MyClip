import React from "react";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Submit from "./Submit";
import "../App.css";

function ClipCard({currentUser}) {
  
  const [clipData, setClipData] = useState([]);
  useEffect(() => {
    fetch("/clips")
      .then((r) => r.json())
      .then((data) => setClipData(data));
  }, []);
  
  function clipDataMapper(){ 
    return (
      clipData.map((clipObject) => {
        return (
          <div className="video-rating-container">
            <VideoPlayer key={clipObject.id} setClipData={setClipData} clipData={clipData} clipObject={clipObject} currentUser={currentUser}/>
          </div>
        );
      })
    )
  }
  
  return (
    <div className="video-cards">
        <Submit currentUser={currentUser}/>
        {clipDataMapper()}
    </div>
  );
}

export default ClipCard;

import React from "react";
import { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Submit from "./Submit";
import "../App.css";

function ClipCard({
  setClipData,
  clipData,
  currentUser,
  switchFetches, 
  setSwitchFetches
}) {
  console.log(switchFetches)
  // function onChangeForFilter(e) {
  //   if(e.target.value === 'mostComments'){
  //     setSwitchFetches(false)
  //   }
  // }
  function onChangeForFilter(e) {
    e.preventDefault();
    setSwitchFetches(false)
  }

console.log(switchFetches);


  function clipDataMapper(){ 
    return (
      clipData.map((clipObject) => {
        return (
          <div className="video-rating-container">
            <VideoPlayer
              key={clipObject.id}
              // commentData={commentData}
              // setCommentData={setCommentData}
              clipData={clipData}
              setClipData={setClipData} 
              clipObject={clipObject}
              currentUser={currentUser}
            />
          </div>
        );
      }) 
    )
  }
  
  return (
    <div className="video-cards">
      <label style={{ color: 'blue'}} for="cars">Filter clips:</label>
        {/* <select name="Sort Clips" 
        // onChange={onChangeForFilter}
        >
          <option  value="rating">Rating</option>
          <option value="new">New</option>
          <option value="mostComments">Most Comments</option>
        </select> */}
        <button onClick={onChangeForFilter}>Most Comments</button>
        <Submit currentUser={currentUser}/>
        {clipDataMapper()}
    </div>
  );
}

export default ClipCard;

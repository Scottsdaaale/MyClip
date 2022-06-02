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
  setSwitchFetches,
}) {

  const [changeColor, setChangeColor] = useState("grey")
  const [findWhichClicked, setFindWhichClicked] = useState(1)
  const [buttonOneOn, setButtonOneOn] = useState(false)
  const [buttonTwoOn, setButtonTwoOn] = useState(false)

  function onChangeForFilter() {
    setSwitchFetches("mostComments")
  }

  function onChangeForFilter2() {
    setSwitchFetches("new");
  }

  function clipDataMapper() {
    return clipData.map((clipObject) => {
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
    });
  }

  return (
    <div className="video-cards">
      {/* <select name="Sort Clips" onChange={onChangeForFilter}>
        <option  value="rating">Rating</option>
        <option value="new">New</option>
        <option value="mostComments">Most Comments</option>
      </select> */}
      <div className="filter-button-container">
        <button className="filter-button" 
        onClick={
          // ()=>
          // {
          onChangeForFilter
          // (); 
          // handleChangeColor()
          // }
          }
          >Most Comments</button>
        <button className="filter-button" 
        onClick={
          // ()=>{
            onChangeForFilter2
            // (); 
            // handleChangeColor2()
            // }
            }
            >New Posts</button>
      </div>
      <Submit currentUser={currentUser} />
      {clipDataMapper()}
    </div>
  );
}

export default ClipCard;

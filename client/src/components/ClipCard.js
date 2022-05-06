import React from 'react'
import VideoPlayer from './VideoPlayer'
import { useState } from 'react';
import StarRating from './StarRating' 
import { render } from "react-dom";
import '../App.css'
function ClipCard() {

  return (
    <div id='video-rating-container'>
      <VideoPlayer />
      
    </div>
  )
}

export default ClipCard
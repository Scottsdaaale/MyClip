import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({clipObject}) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [count, setCount] = useState(0)
  console.log(clipObject.clip.users)
  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }

  function handlePostRequestForRating(ratingValue) {
    console.log(ratingValue);
    fetch("/ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: clipObject.clip.users[0].id,
        number_of_stars: ratingValue,
        clip_id: clipObject.clip.id
        
        //going to need to have other users rate
      }),
    });
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        // console.log(star)
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                handlePostRequestForRating(ratingValue);
              }}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;

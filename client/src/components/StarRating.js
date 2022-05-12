import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ clipObject }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

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

        //need logged in users id when i get that figured out
        clip_id: clipObject.clip.id,
      }),
    });
  }
  // console.log(clipObject.clip.users[0].id)
  return (
    <div className="star-rating-container">
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
              color={ratingValue <= (hover || rating) ? "#0066A2" : "C1C1C1"}
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

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ clipObject, currentUser }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

    const handlePostRequestForRating=(ratingValue) => {
      if (currentUser == null) {
          alert("Please login or create an account.")
        }
      else{
        fetch("/ratings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: currentUser.id,
            number_of_stars: ratingValue,
            clip_id: clipObject.id,
          }),
        });
      }
    }
  return (
    <div className="star-rating-container">
      {[...Array(5)].map((star, i) => {
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

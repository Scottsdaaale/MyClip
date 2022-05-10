import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [count, setCount] = useState(0)

  function incrementCount(){
    setCount(prevCount => prevCount + 1)
  }

  function handlePostRequestForRating(ratingValue) {
    console.log(ratingValue);
    fetch("http://127.0.0.1:3000/ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratingValue),
    });
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        console.log(star)
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

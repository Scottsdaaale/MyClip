import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ clipObject, currentUser }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [averageStars, setAverageStars] = useState(clipObject.ratings);
  // console.log(averageStars)
  const ratingsData = averageStars;
  const sumOfRatings = ratingsData.reduce(
    (sum, current) => sum + current.number_of_stars,
    0
  );
  let ratingsAverageRounded = 0;

  if (ratingsData.length !== 0) {
    //gets average of ratings
    const ratingsAverage = sumOfRatings / ratingsData.length;

    //rounds average up to the next tenth
    ratingsAverageRounded = Math.round(ratingsAverage * 10) / 10;
  }
  const handlePostRequestForRating = (ratingValue) => {
    if (currentUser == null) {
      alert("Please login or create an account.");
    } else {
      fetch("/ratings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: currentUser.id,
          number_of_stars: ratingValue,
          clip_id: clipObject.id,
          final_rating: ratingsAverageRounded,
        }),
      })
      .then((r) => r.json())
      .then(data => {
        console.log(data)
        const avgStarsData={ id: data.id, number_of_stars: data.number_of_stars}
        setAverageStars([...averageStars, avgStarsData])
      })
    }
  };
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
      <h1 id="sum-of-ratings">avg stars: {ratingsAverageRounded}</h1>
    </div>
  );
}

export default StarRating;

import React, { useState } from "react";
const StarRating = ({ onChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div className="flex gap-1 cursor-pointer">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="text-yellow-400 text-xl"
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{ userSelect: "none" }}
        >
          {hover >= star || rating >= star ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;

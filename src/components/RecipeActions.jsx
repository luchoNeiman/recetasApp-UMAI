"use client";

import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const RecipeActions = ({ initialRating, accentColor = "#9a3412" }) => {
  const [likes, setLikes] = useState(0);
  const [showRating, setShowRating] = useState(false);

  const handleLike = () => {
    if (likes < 5) {
      setLikes(likes + 1);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={handleLike}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          style={{
            backgroundColor: likes > 0 ? accentColor : "#f3f4f6",
            color: likes > 0 ? "#ffffff" : "#1f2937",
            border: `2px solid ${likes > 0 ? accentColor : "#e5e7eb"}`,
          }}
        >
          <FaHeart className="text-sm" /> {likes}
        </button>

        <button
          onClick={() => setShowRating(!showRating)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          style={{
            backgroundColor: showRating ? accentColor : "#f3f4f6",
            color: showRating ? "#ffffff" : "#1f2937",
            border: `2px solid ${showRating ? accentColor : "#e5e7eb"}`,
          }}
        >
          <FaStar className="text-sm" /> Rating
        </button>
      </div>

      {showRating && (
        <p className="text-sm text-gray-600" style={{ color: "#575757" }}>
          Rating: {initialRating?.toFixed(1) || "N/A"}/5
        </p>
      )}
    </div>
  );
};

export default RecipeActions;

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

      <p
        className={[
          "min-h-[1.25rem] text-sm transition-opacity duration-200",
          showRating ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{ color: "#575757" }}
        aria-live="polite"
      >
        {showRating ? `Rating: ${initialRating?.toFixed(1) || "N/A"}/5` : "\u00A0"}
      </p>
    </div>
  );
};

export default RecipeActions;

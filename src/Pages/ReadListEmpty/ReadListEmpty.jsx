import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router";

const ReadListEmpty = () => {
  return (
    <div className="flex items-center justify-center min-h-50 my-5 bg-base-200 py-5 px-4">
      <div className="text-center space-y-4 w-full max-w-sm">
        {/* Icon */}
        <div className="text-5xl opacity-70">📚</div>

        {/* Title */}
        <h2 className="text-xl font-semibold">No books in your Read list</h2>

        {/* Subtle hint */}
        <p className="text-sm text-gray-400">Add books to get started</p>

        {/* Button */}
        <Link to="/" className="flex items-center justify-center">
          <button className="btn btn-ghost w-full sm:w-auto flex gap-2 items-center">
            <BsArrowLeft></BsArrowLeft> Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadListEmpty;

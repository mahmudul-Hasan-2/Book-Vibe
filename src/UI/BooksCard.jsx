import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const BooksCard = ({ book }) => {
  return (
    <Link to={`books/${book.bookId}`} className="card bg-base-100 w-full shadow-sm p-6">
      <figure className="bg-gray-100 py-8 rounded-2xl mb-6">
        <img src={book.image} className="w-40 object-contain h-40" />
      </figure>
      <div className="space-y-4">
        <div className="flex gap-3">
          {book.tags.map((tag) => (
            <span className="badge bg-[#23BE0A]/7 text-[#23BE0A] font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title">{book.bookName}</h2>
        <span>By: {book.author}</span>
        <div className="flex items-center justify-between mt-10">
          <span>{book.category}</span>
          <span className="flex items-center gap-2">
            {book.rating}
            <span>
              <FaRegStar />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;

import React, { useContext } from "react";
import { Link } from "react-router";
import { BooksContext } from "../Context/Context";

const BookDetailsCard = ({ expected }) => {
  const { handleReadList, handleWishList } = useContext(BooksContext);
  return (
    <div className="mx-auto container mt-13 px-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center lg:justify-items-start">
        <div className="bg-gray-200 p-4 sm:p-10 rounded-2xl w-full h-full items-center flex justify-center">
          <img src={expected.image} className="w-100 h-125 rounded-2xl object-contain sm:object" />
        </div>
        <div className="w-full space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{expected.bookName}</h1>
            <span>By: {expected.author}</span>
          </div>
          <div className="py-4 border-y border-y-[#13131315]">
            <span className="font-bold text-[#13131380]">
              {expected.category}
            </span>
          </div>
          <div className="">
            <p>
              <span className="font-bold">Review : </span>
              {expected.review}
            </p>
          </div>
          <div>
            <span className="font-bold">Tag</span>
            {expected.tags.map((tag, ind) => (
              <span
                key={ind}
                className="badge bg-[#23BE0A]/7 text-[#23BE0A] font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="h-px bg-[#13131315]"></div>
          <div className="flex items-center gap-15 sm:justify-start justify-between">
            <div className="text-[#13131370] flex flex-col space-y-3">
              <span>Number of Pages:</span>
              <span>Publisher:</span>
              <span>Year of Publishing:</span>
              <span>Rating:</span>
            </div>
            <div className="font-bold text-[#131313] flex flex-col space-y-3">
              <span>{expected.totalPages}</span>
              <span>{expected.publisher}</span>
              <span>{expected.yearOfPublishing}</span>
              <span>{expected.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-col sm:flex-row">
            <Link
              className="btn w-full sm:w-[14%] border border-[#13131320]"
              onClick={() => handleReadList(expected)}
            >
              Read
            </Link>
            <Link
              className="btn w-full sm:w-[14%] bg-[#50B1C9] text-white"
              onClick={() => handleWishList(expected)}
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;

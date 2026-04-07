import React from "react";
import { GoPeople } from "react-icons/go";
import { IoDocumentOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";

const WishListCard = ({ wishList }) => {
  console.log(wishList);
  return (
    <div>
      <div className="flex items-center flex-col md:flex-row gap-6 p-6 border border-[#13131315] rounded-2xl">
        <div className="bg-gray-200/60  py-7 px-12 rounded-3xl">
          <img src={wishList.image} alt="" className="w-30" />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl text-[#131313] font-bold">
            {wishList.bookName}
          </h1>
          <p>By: {wishList.author}</p>
          <div className="flex gap-4 items-center  flex-wrap">
            <span className="font-bold">Tag</span>
            <div className="flex gap-3">
              {wishList.tags.map((tag, ind) => (
                <span
                  key={ind}
                  className="badge bg-[#23BE0A]/7 text-[#23BE0A] font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <IoLocationOutline color="#424242"></IoLocationOutline>
              <span>Year of Publishing: {wishList.yearOfPublishing}</span>
            </div>
          </div>
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex items-center gap-2">
              <GoPeople />
              <span>Publisher: {wishList.publisher}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoDocumentOutline />
              <span>Page: {wishList.totalPages}</span>
            </div>
          </div>
          <div className="h-px bg-[#13131315]"></div>
          <div className="flex items-center flex-wrap gap-3">
            <button className="btn bg-[#328EFF15] text-[#328EFF] rounded-full">
              Category: {wishList.category}
            </button>
            <button className="btn bg-[#FFAC3315] text-[#FFAC33] rounded-full">
              Rating: {wishList.rating}
            </button>
            <Link
              to={`bookDetail/${wishList.bookId}`}
              className="btn bg-[#23BE0A] text-white rounded-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;

import React from "react";
import bannerImage from "../../assets/bookHero.png";

const HomePage = () => {
  return (
    <div className="hero py-10 sm:py-20 bg-gray-100 container mx-auto mt-12 mb-24">
      <div className="flex items-center w-full justify-between flex-col lg:flex-row-reverse px-5 md:px-10 gap-10 max-w-[1400px]">
        <img src={bannerImage} className=" rounded-lg" />
        <div className="space-y-5 sm:space-y-12">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn bg-green-700 text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

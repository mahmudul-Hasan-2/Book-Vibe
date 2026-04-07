import React from "react";

const BookDetailsCard = ({ expected }) => {
  return (
    <div className="mx-auto container">
      <div className="hero-content flex-col lg:flex-row">
        <div className="bg-gray-200 p-[72px] rounded-2xl">
          <img src={expected.image} className="w-100 h-125" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;

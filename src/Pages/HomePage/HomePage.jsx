import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import AllBooks from "../../Components/AllBooks/AllBooks";

const HomePage = () => {
  const books = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <AllBooks books={books}></AllBooks>
    </div>
  );
};

export default HomePage;

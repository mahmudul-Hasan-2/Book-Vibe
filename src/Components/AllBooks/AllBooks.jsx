import React from "react";
import BooksCard from "../../UI/BooksCard";

const AllBooks = ({ books }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-bold mb-9">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center sm:justify-items-start">
        {books.map((book) => (
          <BooksCard book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;

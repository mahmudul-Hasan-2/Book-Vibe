import React from "react";
import BooksCard from "../../UI/BooksCard";

const AllBooks = ({ books }) => {
  return (
    <div>
      <h2>Books</h2>
      {books.map((book) => (
        <BooksCard book={book}></BooksCard>
      ))}
    </div>
  );
};

export default AllBooks;

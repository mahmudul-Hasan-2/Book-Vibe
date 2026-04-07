import React from "react";
import { useLoaderData, useParams } from "react-router";
import BookDetailsCard from "../../UI/BookDetailsCard";

const BookDetails = () => {
  const { booksId } = useParams();
  const books = useLoaderData();
  const expectedBooks = books.find((book) => book.bookId == booksId);
  console.log(expectedBooks);
  return (
    <div>
      <BookDetailsCard expected={expectedBooks}></BookDetailsCard>
    </div>
  );
};

export default BookDetails;

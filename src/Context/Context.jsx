import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, getReadListFromLocalDB } from "../Utils/localDb";
import {
  addWishListToLocalDB,
  getWishListFromLocalDB,
} from "../Utils/localDb2";

// eslint-disable-next-line react-refresh/only-export-components
export const BooksContext = createContext();

const Context = ({ children }) => {
  const [readListBooks, setReadListBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);

  useEffect(() => {
    const getReadListFromLocalDB2 = getReadListFromLocalDB();
    console.log(getReadListFromLocalDB2);
    setReadListBooks(getReadListFromLocalDB2);
  }, []);

  useEffect(() => {
    const getWishListFromLocalDB2 = getWishListFromLocalDB();
    console.log(getWishListFromLocalDB2);
    setWishListBooks(getWishListFromLocalDB2);
  }, []);
  
  const handleReadList = (currentBooks) => {
    let finding1 = readListBooks.find(
      (readList) => readList.bookId === currentBooks.bookId,
    );
    let finding4 = wishListBooks.find(
      (wishList) => wishList.bookId === currentBooks.bookId,
    );
    if (finding1) {
      toast.warning("The book has already added in read list!");
      return;
    } else if (finding4) {
      toast.warning("The book has already added in wish list!");
      return;
    } else {
      toast.success(`${currentBooks.bookName} is Added to Read List`);
      setReadListBooks((prev) => [...prev, currentBooks]);
      addReadListToLocalDB(currentBooks);
    }
  };
  const handleWishList = (currentBooks) => {
    let finding2 = wishListBooks.find(
      (wishList) => wishList.bookId === currentBooks.bookId,
    );
    let finding3 = readListBooks.find(
      (readList) => readList.bookId === currentBooks.bookId,
    );
    if (finding2) {
      toast.warning("The book has already added in wish list!");
      return;
    } else if (finding3) {
      toast.warning("The book has already added in read list!");
    } else {
      toast.success(`${currentBooks.bookName} is Added to Wish List`);
      setWishListBooks((prev) => [...prev, currentBooks]);
      addWishListToLocalDB(currentBooks);
    }
  };
  const data = {
    readListBooks,
    setReadListBooks,
    wishListBooks,
    setWishListBooks,
    handleReadList,
    handleWishList,
  };
  return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>;
};

export default Context;

import React, { useContext, useEffect } from "react";
import { BooksContext } from "../../Context/Context";
import WishListCard from "../../UI/WishListCard";

const WishList = ({ sortingType }) => {
  const { wishListBooks, setWishListBooks } = useContext(BooksContext);
  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishListBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setWishListBooks(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishListBooks].sort(
          (a, b) => a.rating - b.rating,
        );
        setWishListBooks(sortedData);
      }
    }
  }, [sortingType, setWishListBooks]);
  return (
    <div>
      {wishListBooks.map((wishList) => (
        <WishListCard wishList={wishList}></WishListCard>
      ))}
    </div>
  );
};

export default WishList;

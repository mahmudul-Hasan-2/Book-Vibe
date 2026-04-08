import React, { useContext, useEffect } from "react";
import { BooksContext } from "../../Context/Context";
import WishListCard from "../../UI/WishListCard";
import WishListEmptyMessage from "../../Pages/WishListEmptyMessage/WishListEmptyMessage";

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
    <div className="mt-8">
      {wishListBooks.length === 0 ? (
        <WishListEmptyMessage />
      ) : (
        <div className="space-y-6">
          {wishListBooks.map((wishList) => (
            <WishListCard wishList={wishList}></WishListCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;

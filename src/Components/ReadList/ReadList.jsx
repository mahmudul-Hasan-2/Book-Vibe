import React, { useContext, useEffect } from "react";
import { BooksContext } from "../../Context/Context";
import ReadListCard from "../../UI/ReadListCard";
import ReadListEmpty from "../../Pages/ReadListEmpty/ReadListEmpty";

const ReadList = ({ sortingType }) => {
  const { readListBooks, setReadListBooks } = useContext(BooksContext);
  console.log(readListBooks);
  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...readListBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        console.log(sortedData);
        setReadListBooks(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...readListBooks].sort(
          (a, b) => a.rating - b.rating,
        );
        setReadListBooks(sortedData);
      }
    }
  }, [sortingType, setReadListBooks]);
  return (
    <div className="mt-8">
        {readListBooks.length === 0 ? (
          <ReadListEmpty />
        ) : (
          <div className="space-y-6">
            {readListBooks.map((readListBook, ind) => (
              <ReadListCard
                key={ind}
                readListBook={readListBook}
              ></ReadListCard>
            ))}
          </div>
        )}
    </div>
  );
};

export default ReadList;

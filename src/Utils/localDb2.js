const getWishListFromLocalDB = () => {
  const allData = localStorage.getItem("wishList");
  if (allData) return JSON.parse(allData);
  return [];
};

const addWishListToLocalDB = (book) => {
  const allBooks = getWishListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("wishList", JSON.stringify(allBooks));
  }
};

export { getWishListFromLocalDB, addWishListToLocalDB };

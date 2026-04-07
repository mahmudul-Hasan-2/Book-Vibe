const getReadListFromLocalDB = () => {
  const allData = localStorage.getItem("readList");
  if (allData) return JSON.parse(allData);
  return [];
};

const addReadListToLocalDB = (book) => {
  const allBooks = getReadListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};
export { getReadListFromLocalDB, addReadListToLocalDB };

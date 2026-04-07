import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import Root from "./Root/Root";
import HomePage from "./Pages/HomePage/HomePage";
import Books from "./Pages/Books/Books";
import BookDetails from "./Components/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: HomePage,
      },
      {
        path: "books",
        Component: Books,
      },
      {
        path: "bookDetail/:booksId",
        Component: BookDetails,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: "books/bookDetail/:booksId",
        Component: BookDetails,
        loader: () => fetch('/booksData.json'),
      },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;

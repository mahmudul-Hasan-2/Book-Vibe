import React from "react";
import { createBrowserRouter } from "react-router";
import ErrorPage from "./Pages/ErrorPage";
import Root from "./Root/Root";
import HomePage from "./Pages/HomePage/HomePage";
import Books from "./Pages/Books/Books";

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
      { path: "*", Component: ErrorPage },
    ],
  },
]);

export default router;

import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/route.jsx";
import MainGrid from "./routes/MainGrid.jsx";
import SubGrid from "./routes/SubGrid.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainGrid />,
      },
      {
        path: "/videos",
        element: <SubGrid />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

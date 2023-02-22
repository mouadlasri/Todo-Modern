import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Home } from "./components/Landing/Home";
import { CompletedTask } from "./components/Task/CompletedTask/CompletedTask";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Tailwind elements plugin (extension to tailwind that includes out of the box components)
import "tw-elements";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/tasks" />,
      },
      {
        path: "/tasks",
        element: <Home />,
      },
      {
        path: "/tasks/completed",
        element: <CompletedTask />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./componenets/Roots/Roots.jsx";
import Home from "./componenets/Home/Home.jsx";
import AppliedJobs from "./componenets/AppliedJobs/AppliedJobs.jsx";
import Statistics from "./componenets/Statistics/Statistics.jsx";
import Error from "./componenets/Error/Error.jsx";
import Blogs from "./componenets/Blogs/Blogs.jsx";
import JobDetails from "./componenets/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"),
      },
      { path: "/statistics", element: <Statistics></Statistics> },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("jobs.json"),
      },
      { path: "/blogs", element: <Blogs></Blogs> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

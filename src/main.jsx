import * as React from "react";
import {createRoot} from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { ContactUs } from "./pages/ContactUs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about-us",
    element: <AboutUs/>
  },
  {
    path: "/contact-us",
    element: <ContactUs/>
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

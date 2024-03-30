import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Skill from "./pages/Skill.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";
import SingleProjectPage from "./pages/SingleProjectPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App element={<Home />} />,
  },
  {
    path: "/about",
    element: <App element={<About />} />,
  },
  {
    path: "/service",
    element: <App element={<Service />} />,
  },
  {
    path: "/skill",
    element: <App element={<Skill />} />,
  },
  {
    path: "/project",
    element: <App element={<Portfolio />} />,
  },
  {
    path: "/project/:id",
    element: <App element={<SingleProjectPage />} />,
  },
  {
    path: "/education",
    element: <App element={<Education />} />,
  },
  {
    path: "/contact",
    element: <App element={<Contact />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

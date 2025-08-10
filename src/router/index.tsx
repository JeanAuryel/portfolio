/**
 * @copyright 2025 jeanauryel.dev
 * @license Apache-2.0
 */

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/Home";
import About from "../views/About";
import Work from "../views/Work";
import Contact from "../views/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "work",
        element: <Work />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

export default router;
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout
  },
  {
    path: "/auth",
    element: <h1>Authentication Layout</h1>,
  },
  {
    path: "/services",
    element: <h1>Service Layout</h1>,
  },
  {
    path: "/profile",
    element: <h1>Profile Layout</h1>
  },
  {
    path: "/*",
    element: <h1>404 : error</h1>,
  },
]);
export default router;

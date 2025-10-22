import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: ()=> fetch("/PetServices.json"),
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/service_details/:id",
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Authentication Layout</h1>,
  },
  {
    path: "/profile",
    element: <h1>Profile Layout</h1>,
  },
  {
    path: "/*",
    element: <h1>404 : error</h1>,
  },
]);
export default router;

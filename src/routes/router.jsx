import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
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
        loader: ()=> fetch("/PetServices.json"),
        Component: Services,
      },
      {
        path: "/service_details/:id",
        Component: ServiceDetails,
      },
    ],
  },
  {
    path: "/auth",
    element: <h1>Authentication Layout</h1>,
    children: [
      {
        path: "/auth/login"
      }
    ]
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

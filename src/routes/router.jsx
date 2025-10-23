import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
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
        loader: ()=> fetch("/PetServices.json"),
        Component: ServiceDetails,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      },
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

import { createBrowserRouter } from "react-router";
import PageLoader from "../components/PageLoader/PageLoader";
import AuthLayout from "../layouts/AuthLayout";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyProfile from "../pages/MyProfile/MyProfile";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Services from "../pages/Services/Services";
import PrivateRoute from "../providers/PrivateRoute";
import Pets from "../pages/Pets/Pets";
import PetDetails from "../pages/PetDetails/PetDetails";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <PageLoader></PageLoader>,
      },
      {
        path: "/services",
        loader: () => fetch("/PetServices.json"),
        Component: Services,
        hydrateFallbackElement: <PageLoader></PageLoader>,
      },
      {
        path: "/service_details/:id",
        Component: ServiceDetails,
        loader: () => fetch("/PetServices.json"),
        hydrateFallbackElement: <PageLoader></PageLoader>,
      },
      {
        path: "/pets",
        loader: () => fetch("/Pets.json"),
        Component: Pets,
        hydrateFallbackElement: <PageLoader></PageLoader>,
      },
      {
        path: "/pet_details/:id",
        Component: PetDetails,
        loader: () => fetch("/Pets.json"),
        hydrateFallbackElement: <PageLoader></PageLoader>,
      },
      {
        path: "/about_us",
        Component: AboutUs,
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forgot_password",
        Component: ForgotPassword,
      },
    ],
  },

  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
export default router;

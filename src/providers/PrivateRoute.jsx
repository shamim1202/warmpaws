import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import PageLoader from "../components/PageLoader/PageLoader";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <PageLoader />;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;

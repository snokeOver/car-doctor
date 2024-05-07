import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PageSkeleton from "../conponents/shared/PageSkeleton";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <PageSkeleton />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;

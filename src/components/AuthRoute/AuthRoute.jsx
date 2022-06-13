import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../Context/auth-Context";

const AuthRoute = () => {
  const { foundUser, createdUser } = useAuth();
  return foundUser || createdUser ? (
    <Navigate to="/" replace={true} />
  ) : (
    <Outlet />
  );
};

export default AuthRoute;

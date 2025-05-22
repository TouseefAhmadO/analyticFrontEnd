import React from "react";
import { Navigate } from "react-router-dom";
import AppLayout from "../Layout";

const AuthRoute = ({ children, isAuthenticated, signUp }) => {
  const RedirectRoute = signUp ? "/sign-up" : "/login";
  return isAuthenticated ? (
    <AppLayout> {children}</AppLayout>
  ) : (
    <Navigate to={RedirectRoute} replace />
  );
};

export default AuthRoute;

import { Navigate } from "react-router-dom";

const AuthRoute = ({ children, isAuthenticated, signUp }) => {
  const RedirectRoute = signUp ? "/sign-up" : "/login";
  return isAuthenticated ? children : <Navigate to={RedirectRoute} replace />;
};

export default AuthRoute;

import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import AuthRoute from "./Auth/AuthRouter";
import SpendData from "./Pages/SpendData";
import Savings from "./Pages/savings";
import Bids from "./Pages/Bids";
import { AuthContext } from "./components/Auth/authContext";
import { ThemeContext } from "./components/Theme/ThemeProvider";
import { ToastContainer } from "react-toastify";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme={theme} />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/sign-up"
            element={isAuthenticated ? <Navigate to="/" replace /> : <SignUp />}
          />
          <Route
            path="/"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <Home />
              </AuthRoute>
            }
          />
          <Route
            path="/spend-data"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <SpendData />
              </AuthRoute>
            }
          />
          <Route
            path="/savings"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <Savings />
              </AuthRoute>
            }
          />
          <Route
            path="/bids"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <Bids />
              </AuthRoute>
            }
          />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

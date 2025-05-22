import { useContext, useState } from "react";
import style from "./style.module.scss";
import { Button, Input } from "antd";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../components/Theme/ThemeProvider";
import ThemeToggle from "../../components/Theme/ThemeToggle";
import axios from "axios";
import { AuthContext } from "../../components/Auth/authContext";
import { toast } from "react-toastify";
import { BASE_URL } from "../../components/constant";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(AuthContext);
  const initialValues = {
    email: "",
    password: "",
  };
  const initialError = {
    email: "",
    password: "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [error, setError] = useState(initialError);
  const [loading, setLoading] = useState(false);

  const HandleChange = (val, name) => {
    setformValues({
      ...formValues,
      [name]: val,
    });

    setError({
      ...error,
      [name]: "",
    });
  };
  const handleLogin = async () => {
    const errors = {};
    const { email, password } = formValues;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setLoading(true);

    if (!email) {
      errors.email = "Enter email";
    } else if (!isValidEmail.test(email)) {
      errors.email = "Enter a valid email";
    }
    if (!password) {
      errors.password = "Enter password";
    }

    if (Object.keys(errors).length) {
      setError({ ...error, ...errors });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      const { token } = response.data;
      await login(token);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      const message =
        err.response?.data?.message || "Login failed. Check your credentials.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const HandleSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div
      className={`${style.mainContainer} ${
        theme === "light" ? style.light : style.dark
      }`}
    >
      <div className={style.container}>
        <div className={style.formContainer}>
          <ThemeToggle />
          <h1>Login</h1>
          <div className={style.formGroup}>
            <label>Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formValues.email}
              onChange={(e) => HandleChange(e.target.value, "email")}
              className={style.loginInput}
              addonBefore={<EmailIcon />}
            />
          </div>
          {error.email && <p className={style.errorStyle}>{error.email}</p>}
          <div className={style.formGroup}>
            <label>Password</label>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formValues.password}
              onChange={(e) => HandleChange(e.target.value, "password")}
              className={style.loginInput}
              addonBefore={<HttpsIcon />}
            />
          </div>
          {error.password && (
            <p className={style.errorStyle}>{error.password}</p>
          )}
          <Button className={style.btnStyle} onClick={handleLogin}>
            {loading ? <CircularProgress size={20} color="#fff" /> : "Login"}
          </Button>
          <p className={style.noAccountStyle}>
            Don't have an account?<span onClick={HandleSignUp}> Sign Up</span>
          </p>
        </div>
        <div className={style.analyticsContainer}>
          <h1>Welcome to</h1>
          <h2>Logo</h2>
          <h3>Logo Name</h3>
          <p>
            A real-time dashboard providing clear insights into supplier spend,
            <br />
            savings, and operational performance to support smarter business
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useContext, useState } from "react";
import style from "./style.module.scss";
import { Button, Input } from "antd";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../components/Theme/ThemeProvider";
import ThemeToggle from "../../components/Theme/ThemeToggle";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../components/constant";

const SignUp = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initialError = {
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [error, setError] = useState(initialError);

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
  const handleSignUp = async () => {
    const errors = {};
    const { username, email, password, confirmPassword } = formValues;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username) errors.username = "Enter username";
    if (!email) {
      errors.email = "Enter email";
    } else if (!isValidEmail.test(email)) {
      errors.email = "Enter a valid email";
    }
    if (!password) {
      errors.password = "Enter password";
    } else if (password !== confirmPassword) {
      errors.password = "Passwords do not match";
    }

    if (Object.keys(errors).length) {
      setError({ ...error, ...errors });
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        toast.success("Signup successful! Please login.");
        navigate("/login");
      }
    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong. Try again.";
      console.log("hhfkdfjnjdjdsjdsnjsdns", err);
      toast.error(message);
    }
  };

  const HandleLogin = () => {
    navigate("/login");
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
          <h1>Sign Up</h1>
          <div className={style.formGroup}>
            <label>Username</label>
            <Input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formValues.username}
              onChange={(e) => HandleChange(e.target.value, "username")}
              className={style.loginInput}
              Email
              addonBefore={<PersonIcon />}
            />
          </div>
          {error.username && (
            <p className={style.errorStyle}>{error.username}</p>
          )}
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
          <div className={style.formGroup}>
            <label>Confirm Password</label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Enter confirm password"
              value={formValues.confirmPassword}
              onChange={(e) => HandleChange(e.target.value, "confirmPassword")}
              className={style.loginInput}
              addonBefore={<HttpsIcon />}
            />
          </div>
          {error.password && (
            <p className={style.errorStyle}>{error.password}</p>
          )}
          <Button className={style.btnStyle} onClick={handleSignUp}>
            Sign Up
          </Button>
          <p className={style.noAccountStyle}>
            You already have an account?
            <span onClick={HandleLogin}> Login</span>
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

export default SignUp;

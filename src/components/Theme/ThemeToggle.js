import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import style from "./style.module.scss";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/authContext";
import { toast } from "react-toastify";

const ThemeToggle = ({ isHome = false }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);
  const IsDark = theme === "dark";

  const HandleLogout = () => {
    logout();
    toast.success("Logout successful!");
    navigate("/login");
  };

  return (
    <div
      className={`${style.mainContainer} ${IsDark ? style.dark : style.light}`}
    >
      {isHome && (
        <button className={style.btnStyle} onClick={HandleLogout}>
          <LogoutIcon />
        </button>
      )}
      <button onClick={toggleTheme} className={style.btnStyle}>
        {IsDark ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  );
};

export default ThemeToggle;

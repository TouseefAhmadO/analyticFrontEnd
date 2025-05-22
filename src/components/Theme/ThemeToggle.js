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
        <>
          <button className={style.outBtnStyle} onClick={HandleLogout}>
            <LogoutIcon fontSize="small" />
          </button>
          <p onClick={HandleLogout}>Logout</p>
        </>
      )}

      <button onClick={toggleTheme} className={style.btnStyle}>
        {IsDark ? (
          <LightModeIcon fontSize="small" />
        ) : (
          <DarkModeIcon fontSize="small" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;

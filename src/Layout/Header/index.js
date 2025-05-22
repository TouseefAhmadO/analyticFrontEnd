import { Layout } from "antd";
import style from "./style.module.scss";
import { useContext } from "react";
import ThemeToggle from "../../components/Theme/ThemeToggle";
import { ThemeContext } from "../../components/Theme/ThemeProvider";
const { Header } = Layout;

const AppHeader = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Header
      className={`${style.mainContainer} ${
        theme === "light" ? style.light : style.dark
      }`}
    >
      <h2>LOGO</h2>
      <ThemeToggle isHome={true} />
    </Header>
  );
};

export default AppHeader;

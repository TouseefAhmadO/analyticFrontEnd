import React, { useContext } from "react";
import { ThemeContext } from "../../components/Theme/ThemeProvider";
import style from "./style.module.scss";
import { Layout } from "antd";

const AppContent = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout
      className={`${style.mainContainer} ${
        theme === "light" ? style.light : style.dark
      }`}
    >
      {children}
    </Layout>
  );
};

export default AppContent;

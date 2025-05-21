import style from "./style.module.scss";
import ThemeToggle from "../Theme/ThemeToggle";
import { ThemeContext } from "../Theme/ThemeProvider";
import { useContext } from "react";

const SideBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${style.mainContainer} ${
        theme === "light" ? style.light : style.dark
      }`}
    >
      <h1>
        <ThemeToggle isHome={true} />
      </h1>
      <h2>Page Filters</h2>
      <h3>Period</h3>
      <h4>2024 & 2025</h4>
      <h3>Country</h3>
      <h4>United states</h4>
      <h3>Region</h3>
      <h4>All</h4>
      <h3>Brand</h3>
      <h4>All</h4>
      <h3>Category</h3>
      <h4>All</h4>
      <h3>Supplier</h3>
      <h4>All</h4>
    </div>
  );
};

export default SideBar;

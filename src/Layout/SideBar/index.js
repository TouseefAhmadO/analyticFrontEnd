import React, { useContext, useState } from "react";
import style from "./style.module.scss";
import { Layout } from "antd";
import { ThemeContext } from "../../components/Theme/ThemeProvider";
import { Button } from "@mui/material";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const { Sider } = Layout;

const menuItems = [
  "Dashboards",
  "Tasks",
  "Transactions",
  "Advanced accounting",
  "Sales",
  "Expenses",
  "Customers & leads",
  "Reports",
];

const AppSideBar = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Sider
      width={300}
      theme={theme === "light" ? "light" : "dark"}
      breakpoint="lg"
      collapsedWidth="0"
      className={`${style.mainContainer} ${
        theme === "light" ? style.light : style.dark
      }`}
    >
      <div className={style.container}>
        <Button className={style.btnStyle}>+ New</Button>
        <div className={style.menuContainer}>
          <div className={style.menus}>
            <div className={style.menuHeader}>
              <span>
                <KeyboardArrowRightOutlinedIcon className={style.iconStyle} />
                BOOKMARKS
              </span>
              <ModeEditOutlinedIcon className={style.iconStyle} />
            </div>
          </div>

          <div className={style.menus}>
            <div
              className={style.menuHeader}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>
                {isOpen ? (
                  <KeyboardArrowDownOutlinedIcon className={style.iconStyle} />
                ) : (
                  <KeyboardArrowRightOutlinedIcon className={style.iconStyle} />
                )}
                MENU
              </span>
              <ModeEditOutlinedIcon className={style.iconStyle} />
            </div>

            {isOpen && (
              <ul className={style.menuList}>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item}
                    <span className={style.arrow}>
                      <ArrowForwardIosOutlinedIcon />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={style.menus}>
            <div className={style.menuHeader}>
              <span>
                <SettingsOutlinedIcon className={style.iconStyle} />
                Menu Settings
              </span>
            </div>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default AppSideBar;

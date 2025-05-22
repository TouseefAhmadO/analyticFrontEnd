import React, { useContext } from "react";
import style from "./style.module.scss";
import SideBar from "../../components/SidebarOld";
import { Button } from "antd";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { useNavigate } from "react-router-dom";
import {
  TableProjectData,
  TableSupplierData,
} from "../../components/DammayData";
import { ThemeContext } from "../../components/Theme/ThemeProvider";

const Bids = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const HandleTabs = (name) => {
    navigate(name);
  };
  return (
    <div
      className={`${style.mainContainer} ${
        theme === "light" ? style.light : style.dark
      }`}
    >
      <SideBar />
      <div className={style.container}>
        <div className={style.headContainer}>
          <h1>
            Total Spend YTD
            <br />
            $5.4 Million
          </h1>
          <h1>
            Total Projects
            <br />
            54
          </h1>
          <h1>
            Preferred Suppliers
            <br />
            30
          </h1>
          <div className={style.headItemsContainer}>
            <Button className={style.btnStyle} onClick={() => HandleTabs("/")}>
              Overview
            </Button>
            <Button
              className={style.btnStyle}
              onClick={() => HandleTabs("/spend-data")}
            >
              Spend Data
            </Button>
            <Button
              className={style.btnStyle}
              onClick={() => HandleTabs("/savings")}
            >
              Savings
            </Button>
            <Button
              className={style.activeBtnStyle}
              onClick={() => HandleTabs("/bids")}
            >
              Project Bids
            </Button>
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.contentTableContainer}>
            <div className={style.contentHeadContainer}>
              <h1>My Projects</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.contantInnerTable}>
              <div className={style.tableStyle}>
                <h3>Project Name</h3>
                <h3>Status</h3>
                <h3>Category</h3>
                <h3>Live Date</h3>
              </div>
              <div style={{ overflowY: "scroll", height: "70vh" }}>
                {TableProjectData?.map((item, index) => {
                  return (
                    <div key={index} className={style.tableStyle}>
                      <h1>{item?.name}</h1>
                      <h1>{item?.status}</h1>
                      <h1>{item?.category}</h1>
                      <h1>{item?.date}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={style.contentTableSecondContainer}>
            <div className={style.contentHeadContainer}>
              <h1>Preferred Suppliers</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.contantInnerTable}>
              <div className={style.tableStyle}>
                <h3>Supplier Name</h3>
                <h3>Categories</h3>
                <h3>Contact Status</h3>
                <h3>Location</h3>
                <h3>Payment Terms</h3>
              </div>
              <div style={{ overflowY: "scroll", height: "70vh" }}>
                {TableSupplierData?.map((item, index) => {
                  return (
                    <div key={index} className={style.tableStyle}>
                      <h1>{item?.name}</h1>
                      <h1>{item?.category}</h1>
                      <h1>{item?.status}</h1>
                      <h1>{item?.location}</h1>
                      <h1>{item?.payment}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bids;

import React, { useContext } from "react";
import style from "./style.module.scss";
import SideBar from "../../components/SidebarOld";
import { Button } from "antd";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import { HSBChart, SDDChart, HDChart } from "../../components/Charts";
import { TableData } from "../../components/DammayData";
import { ThemeContext } from "../../components/Theme/ThemeProvider";

const Savings = () => {
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
            Total Savings
            <br />
            $5.4 Million
          </h1>
          <h1>
            Savings Target
            <br />
            $6.2 Million
          </h1>
          <h1>
            % to Target
            <br />
            87%
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
              className={style.activeBtnStyle}
              onClick={() => HandleTabs("/savings")}
            >
              Savings
            </Button>
            <Button
              className={style.btnStyle}
              onClick={() => HandleTabs("/bids")}
            >
              Project Bids
            </Button>
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.contentTableContainer}>
            <div className={style.contentHeadContainer}>
              <h1>SAVINGS BY SUPPLIER</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.contantInnerTable}>
              {TableData?.map((item, index) => {
                return (
                  <div key={index} className={style.tableStyle}>
                    <h1>{item?.name}</h1>
                    <h2>{item?.value}</h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={style.chartContainer}>
            <div className={style.contentHeadContainer}>
              <h1>SAVINGS OVERVIEW</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.chartStyle} style={{ width: "65%" }}>
              <Chart
                options={HDChart.options}
                series={HDChart.series}
                type="donut"
                height="400"
              />
            </div>
            <div className={style.chartSecondContainer}>
              <div style={{ display: "block" }}>
                <div className={style.contentHeadContainer}>
                  <h1>% SAVINGS BY SUPPLIER</h1>
                  <FilterAltOutlinedIcon className={style.iconStyle} />
                  <OpenInNewOutlinedIcon className={style.iconStyle} />
                </div>
                <div className={style.chartStyle}>
                  <Chart
                    options={SDDChart.options}
                    series={SDDChart.series}
                    type="donut"
                    width="300"
                  />
                </div>
              </div>
              <div style={{ display: "block" }}>
                <div className={style.contentHeadContainer}>
                  <h1>SAVINGS BY CATEGORY</h1>
                  <FilterAltOutlinedIcon className={style.iconStyle} />
                  <OpenInNewOutlinedIcon className={style.iconStyle} />
                </div>
                <div className={style.chartStyle}>
                  <Chart
                    options={HSBChart.options}
                    series={HSBChart.series}
                    type="bar"
                    width="380"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;

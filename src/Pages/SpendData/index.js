import React, { useContext } from "react";
import style from "./style.module.scss";
import SideBar from "../../components/Sidebar";
import { Button } from "antd";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Chart from "react-apexcharts";
import { useNavigate } from "react-router-dom";
import {
  HBChart,
  SDSBChart,
  HSBChart,
  SDDChart,
} from "../../components/Charts";
import { TableData } from "../../components/DammayData";
import { ThemeContext } from "../../components/Theme/ThemeProvider";

const SpendData = () => {
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
            Total Spend <br />
            $77.1 Million
          </h1>
          <h1>
            Total Suppliers
            <br />
            52
          </h1>
          <h1>
            Total Orders
            <br />
            120
          </h1>
          <div className={style.headItemsContainer}>
            <Button className={style.btnStyle} onClick={() => HandleTabs("/")}>
              Overview
            </Button>
            <Button
              className={style.activeBtnStyle}
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
              <h1>FULL SUPPLIER LIST</h1>
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
          <div className={style.chartContainer} style={{ marginTop: "50px" }}>
            <div className={style.contentHeadContainer}>
              <h1>SPEND BY SUPPLIER</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.chartStyle}>
              <Chart
                options={SDDChart.options}
                series={SDDChart.series}
                type="donut"
                heigh="300"
              />
            </div>
            <div className={style.contentHeadContainer}>
              <h1>SEASONALITY SPEND</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.chartStyle}>
              <Chart
                options={SDSBChart.options}
                series={SDSBChart.series}
                type="bar"
                width="500"
              />
            </div>
          </div>
          <div className={style.chartContainer}>
            <div className={style.contentHeadContainer}>
              <h1>SPEND BY BRAND</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.chartStyle}>
              <Chart
                options={HSBChart.options}
                series={HSBChart.series}
                type="bar"
                width="500"
              />
            </div>
            <div className={style.contentHeadContainer}>
              <h1>SPEND BY CATEGORY</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.chartStyle}>
              <Chart
                options={HBChart.options}
                series={HBChart.series}
                type="bar"
                width="500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendData;

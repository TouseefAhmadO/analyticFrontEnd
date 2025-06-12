import { useContext, useState } from "react";
import style from "./style.module.scss";
import SideBar from "../../components/Sidebar";
import { Button } from "antd";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { useNavigate } from "react-router-dom";
import { TableData } from "../../components/DammayData";
import { ThemeContext } from "../../components/Theme/ThemeProvider";
import MultiChart from "../../components/MultiChart";

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [donutChart, setDonutChart] = useState("donut");
  const [barChart, setBarChart] = useState("bar");

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
          <h1>Point of Sale Dashboard</h1>
          <div className={style.headItemsContainer}>
            <Button
              className={style.activeBtnStyle}
              onClick={() => HandleTabs("/")}
            >
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
              className={style.btnStyle}
              onClick={() => HandleTabs("/contacts")}
            >
              Contacts
            </Button>
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.contentTableContainer}>
            <div className={style.contentInnerTableContainer}>
              <div className={style.contentHeadContainer}>
                <h1>TOP 10 SUPPLIER SPEND</h1>
                {/* <FilterAltOutlinedIcon className={style.iconStyle} />
                <OpenInNewOutlinedIcon className={style.iconStyle} /> */}
              </div>
              <div className={style.innerTable}>
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
            <div className={style.totalContainer}>
              <h1>
                Total Spend <br /> $65,888,410
              </h1>
              <h1>
                Total Spend % <br />
                85%
              </h1>
            </div>
          </div>
          <div className={style.reportContainer}>
            <h1>
              Total Savings <br /> $3.2 Million
            </h1>
            <h1>
              Total Suppliers <br /> 54
            </h1>
            <h1>
              Total Spend <br /> $77.1 Million
            </h1>
          </div>
          <div className={style.chartContainer}>
            <MultiChart
              title={"SAVINGS OVERVIEW"}
              selectChart={donutChart}
              setSelectChart={setDonutChart}
            />
            <MultiChart
              title={"SPEND BY CATEGORY"}
              selectChart={barChart}
              setSelectChart={setBarChart}
            />
            {/* <div className={style.contentHeadContainer}>
              <h1>TOP 10 SUPPLIER SPEND</h1>
              <FilterAltOutlinedIcon className={style.iconStyle} />
              <OpenInNewOutlinedIcon className={style.iconStyle} />
            </div>
            <div className={style.chartStyle}>
              <Chart
                options={HDChart.options}
                series={HDChart.series}
                type="donut"
                width="300"
              />
            </div> */}
            {/* <div className={style.contentHeadContainer}>
              <h1>TOP 10 SUPPLIER SPEND</h1>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

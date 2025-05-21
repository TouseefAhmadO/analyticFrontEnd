import style from "./style.module.scss";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { ThemeContext } from "../Theme/ThemeProvider";
import { useContext, useState } from "react";
import Chart from "react-apexcharts";
import { HBChart, HDChart, HSBChart, SDDChart, SDSBChart } from "../Charts";
import { Select } from "antd";

const MultiChart = ({ selectChart, setSelectChart }) => {
  const { theme } = useContext(ThemeContext);
  // const [selectChart, setSelectChart] = useState("donut");

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectChart(value);
  };
  const isDonut = selectChart === "donut";
  const isPie = selectChart === "pie";
  const isColumn = selectChart === "column";
  const isBar = selectChart === "bar";
  return (
    <div
      className={`${style.mainContainer} ${
        theme === "light" ? style.light : style.dark
      }`}
    >
      <div className={style.contentHeadContainer}>
        <h1>TOP 10 SUPPLIER SPEND</h1>
        {/* <FilterAltOutlinedIcon className={style.iconStyle} />
        <OpenInNewOutlinedIcon className={style.iconStyle} /> */}
        <Select
          onChange={handleChange}
          value={selectChart}
          className={style.selectStyle}
          options={[
            { value: "pie", label: "Pie" },
            { value: "donut", label: "Donut" },
            { value: "column", label: "Column" },
            { value: "bar", label: "Bar" },
          ]}
        />
      </div>
      <div className={style.chartStyle}>
        {isDonut && (
          <Chart
            options={HDChart.options}
            series={HDChart.series}
            type="donut"
            height="500"
          />
        )}
        {isPie && (
          <Chart
            options={SDDChart.options}
            series={SDDChart.series}
            type="donut"
            height="500"
          />
        )}
        {isColumn && (
          <Chart
            options={SDSBChart.options}
            series={SDSBChart.series}
            type="bar"
            width="500"
          />
        )}

        {isBar && (
          <Chart
            options={HSBChart.options}
            series={HSBChart.series}
            type="bar"
            width="500"
          />
        )}
      </div>
    </div>
  );
};

export default MultiChart;

import style from "./style.module.scss";
import { ThemeContext } from "../Theme/ThemeProvider";
import { useContext } from "react";
import Chart from "react-apexcharts";
import { HDChart, HSBChart, SDDChart, SDSBChart } from "../Charts";
import { Select } from "antd";

const MultiChart = ({ title, selectChart, setSelectChart }) => {
  const { theme } = useContext(ThemeContext);

  const handleChange = (value) => {
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
      <div className={style.container}>
        <div className={style.contentHeadContainer}>
          <h1>{title}</h1>
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
              width="450"
            />
          )}
          {isPie && (
            <Chart
              options={SDDChart.options}
              series={SDDChart.series}
              type="donut"
              width="450"
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
    </div>
  );
};

export default MultiChart;

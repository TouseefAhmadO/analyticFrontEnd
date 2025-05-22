import React, { useContext } from "react";
import style from "./style.module.scss";
import { ThemeContext } from "../../components/Theme/ThemeProvider";
import Chart from "react-apexcharts";
import { DonutChart, LineChart, StackedChart } from "../../components/Charts";
import { Progress } from "antd";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${style.container} ${
        theme === "light" ? style.light : style.dark
      }`}
    >
      <h1>Business overview</h1>

      <div className={style.businessContainer}>
        <div className={style.businessItems}>
          <h1>Cash Flow</h1>
          <h2>$65,000</h2>
          <div className={style.chartContainer}>
            <Chart
              options={StackedChart.options}
              series={StackedChart.series}
              type="bar"
              width="100%"
              className={style.stackStyle}
            />
          </div>
        </div>
        <div className={style.businessItems}>
          <h1>Expenses</h1>
          <h2>$80,000</h2>
          <Chart
            options={DonutChart.options}
            series={DonutChart.series}
            type="donut"
            width="80%"
            className={style.donutStyle}
          />
        </div>
        <div className={style.businessItems}>
          <h1>Profit & Loss</h1>
          <h2>$210,000</h2>
          <div className={style.proLossContainer}>
            <div>
              <h2>$290,000</h2>
              <p>Profit</p>
            </div>
            <Progress
              size={["100%", 40]}
              style={{ width: "80%" }}
              strokeLinecap="square"
              percent={70}
              showInfo={false}
              strokeColor="#009e04"
              trailColor="#d2d5de"
            />
          </div>
          <div className={style.proLossContainer}>
            <div>
              <h2>$80,000</h2>
              <p>Loss</p>
            </div>
            <Progress
              style={{ width: "80%" }}
              size={["80%", 40]}
              strokeLinecap="square"
              percent={70}
              showInfo={false}
              strokeColor="#00a79f"
              trailColor="#d2d5de"
            />
          </div>
        </div>
        <div className={style.businessItems}>
          <h1>Invoices</h1>
          <div style={{ paddingTop: "30px" }}>
            <div className={style.invoiceContainer}>
              <h1>$3,525</h1>
              <h1>$13,756</h1>
            </div>
            <Progress
              size={["100%", 50]}
              strokeLinecap="square"
              percent={30}
              showInfo={false}
              strokeColor="#f65b0a"
              trailColor="#d2d5de"
            />

            <div className={style.invoiceContainer}>
              <h1>$32,062</h1>
              <h1>$41,629</h1>
            </div>
            <Progress
              size={["100%", 50]}
              strokeLinecap="square"
              percent={40}
              showInfo={false}
              strokeColor="#31d400"
              trailColor="#0e9311"
            />
          </div>
        </div>
        <div className={style.businessItems}>
          <h1>Bank Accounts</h1>
          <div style={{ paddingTop: "30px" }}>
            <div className={style.bankContainer}>
              <h2>Checking Balance</h2>
              <h3>$429,435</h3>
            </div>
            <div className={style.bankContainer}>
              <h2>Credit Balance</h2>
              <h3>$3,435</h3>
            </div>
          </div>
        </div>
        <div className={style.businessItems}>
          <h1>Sales</h1>
          <h2>$245,000</h2>

          <div className={style.chartContainer}>
            <Chart
              options={LineChart.options}
              series={LineChart.series}
              type="line"
              width="100%"
              className={style.stackStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

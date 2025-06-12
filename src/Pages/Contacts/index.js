import { useContext, useState } from "react";
import style from "./style.module.scss";
import SideBar from "../../components/Sidebar";
import { Button } from "antd";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { useNavigate } from "react-router-dom";
import { TableSupplierDetailData } from "../../components/DammayData";
import { ThemeContext } from "../../components/Theme/ThemeProvider";
import MultiChart from "../../components/MultiChart";

const Contacts = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [funnelChart, setFunnelChart] = useState("funnel");

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
              onClick={() => HandleTabs("/contacts")}
            >
              Contacts
            </Button>
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.chartContainer}>
            <div className={style.chartStyle}>
              <MultiChart
                title={"SUPPLIER DISTRIBUTION"}
                selectChart={funnelChart}
                setSelectChart={setFunnelChart}
              />
            </div>
          </div>
          <div className={style.contentTableContainer}>
            <div className={style.contantInnerTable}>
              <div className={style.contentHeadContainer}>
                <h1>SUPPLIER CONTRACT DETAILS</h1>
              </div>
              <div className={style.tableStyle}>
                <h3>Supplier</h3>
                <h3>Contract Value</h3>
                <h3>Contract Status</h3>
                <h3>Expiration Date</h3>
                <h3>Effective Date</h3>
                <h3>Payment Terms</h3>
                <h3>Rebate</h3>
                <h3>Savings</h3>
                <h3>Contact</h3>
              </div>
              <div style={{ overflowY: "scroll", height: "40vh" }}>
                {TableSupplierDetailData?.map((item, index) => {
                  return (
                    <div key={index} className={style.tableStyle}>
                      <h1>{item?.name}</h1>
                      <h1>{item?.value}</h1>
                      <h1>{item?.status}</h1>
                      <h1>{item?.expire_date}</h1>
                      <h1>{item?.effective_date}</h1>
                      <h1>{item?.payment_term}</h1>
                      <h1>{item?.rebate}</h1>
                      <h1>{item?.savings}</h1>
                      <h1>{item?.contact}</h1>
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

export default Contacts;

import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import style from "./style.module.scss";
import AppHeader from "./Header";
import AppSideBar from "./SideBar";
import AppContent from "./Content";

const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

  return (
    <Layout className={style.mainContainer}>
      {/* <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme="light"
        width={300}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider> */}

      <AppSideBar />
      <Layout>
        <AppHeader />
        {/* <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
        </Content> */}
        <AppContent>{children}</AppContent>
      </Layout>
    </Layout>
  );
};
export default AppLayout;

import { useState } from "react";
import { Link } from "react-router-dom";
import { MdEventNote } from "react-icons/md";
import { CiMemoPad } from "react-icons/ci";

import { Button, Layout, theme, Menu, Flex } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import Logo from "../sidebarcomponents/Logo";
import MenuList from "../sidebarcomponents/MenuList";
import HeaderMenu from "../modules/Orders/HeaderMenu";
import OrderViewContent from "../modules/Orders/OrderViewContent";
import KotViewContent from "../modules/Orders/KotViewContent";


const { Header, Footer, Sider } = Layout;

function Orders() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const [value, setValue] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const [isOrderViewVisible, setIsOrderViewVisible] = useState(false);
  const [isKotVisible, setIsKotVisible] = useState(false);

  const toggleVisibility = () => {
    setIsOrderViewVisible(!isOrderViewVisible);
    setIsKotVisible(false);
  };
  const toggleKotVisibility = () => {
    setIsKotVisible(!isKotVisible);
    setIsOrderViewVisible(false);
  };

  const handleFavoriteChange = (e) => {
    setIsFavorite(e.target.checked);
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //dropdown

  const menu = (
    <Menu>
      <Menu.Item key="1">UPI</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? "dark" : "light"}
          className="sidebar"
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          {/* <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} /> */}
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Flex align="center" justify="space-between">
              <Button
                className="toggle"
                onClick={() => setCollapsed(!collapsed)}
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              />
              <h3>Orders</h3>
              <Flex style={{ gap: "1rem" }} align="center">
                <Button icon={<ArrowLeftOutlined />}>Back</Button>
              </Flex>
            </Flex>
          </Header>
          <Layout>
            {/* {Body} */}
            <Flex
              className="p-2"
              justify="space-between"
              align="center"
              style={{ height: "5rem", backgroundColor: "#C7C8CC" }}
            >
              <Flex gap="1rem">
                <span className="cursor-pointer" onClick={toggleVisibility}>
                  <MdEventNote />
                  Order View{" "}
                </span>
                <span className="cursor-pointer" onClick={toggleKotVisibility}>
                  <CiMemoPad />
                  Kot View
                </span>
              </Flex>
              {!isKotVisible && <HeaderMenu />}
            </Flex>
            {isOrderViewVisible && <OrderViewContent />}
            {isKotVisible && <KotViewContent />}
          </Layout>

          <Footer style={{ textAlign: "center" }}>
            Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default Orders;

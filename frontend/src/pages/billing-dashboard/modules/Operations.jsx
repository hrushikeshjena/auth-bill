import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegFileAlt,FaRegBell,FaBookOpen,FaPercent  } from "react-icons/fa";
import { TbBrandPagekit } from "react-icons/tb";
import { FaUsers } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { GiExpense,GiCash } from "react-icons/gi";
import { PiHandWithdraw } from "react-icons/pi";
import { MdOutlineInventory2 } from "react-icons/md";
import { GrHelpBook } from "react-icons/gr";
import { RiGalleryView2 } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { MdOutlineFeedback } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoMdPrint } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { LuScreenShare } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import { TbStatusChange } from "react-icons/tb";

import { Button, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { theme } from "antd"; 
import Logo from "../sidebarcomponents/Logo";
import MenuList from "../sidebarcomponents/MenuList";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          className="sidebar"
          theme={darkTheme ? "dark" : "light"}

        >
          <Logo />
          <MenuList darkTheme={darkTheme}/>
        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>

          <Layout>
            <Content>
              <div className="d-flex">
                <div className="operation-container">
                  <div className="d-flex">
                    <div className="card-cont">
                      <Link to="/orders" className="noUnderline">
                        <FaRegFileAlt className="operation-logo-size" />

                        <div>Orders</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/kot" className="noUnderline">
                        <TbBrandPagekit className="operation-logo-size" />
                        <div>KOTs</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/contacts" className="noUnderline">
                        <FaUsers className="operation-logo-size" />
                        <div>Customers</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/cashflow" className="noUnderline">
                        <BsCashCoin className="operation-logo-size" />
                        <div>Cash Flow</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/expense" className="noUnderline">
                        <GiExpense className="operation-logo-size" />
                        <div>Expense</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/withdraw" className="noUnderline">
                        <PiHandWithdraw className="operation-logo-size" />
                        <div>Withdrawal</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/cashtopup" className="noUnderline">
                        <GiCash className="operation-logo-size" />
                        <div>Cash Top-up</div>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="card-cont">
                      <Link to="/inventorys" className="noUnderline">
                        <MdOutlineInventory2 className="operation-logo-size" />
                        <div>Inventory</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/notification" className="noUnderline">
                        <FaRegBell className="operation-logo-size" />
                        <div>Notification</div>
                      </Link>
                    </div>

                    <div className="card-cont">
                      <Link to="/help" className="noUnderline">
                        <GrHelpBook className="operation-logo-size" />
                        <div>Help</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/liveview" className="noUnderline">
                        <RiGalleryView2 className="operation-logo-size" />
                        <div>Live View</div>
                      </Link>
                    </div>
                    {/* <div className="card-cont">
                    <Link to=''  className="noUnderline">
                      <RiSecurePaymentLine className="operation-logo-size" />
                      <div>Due Payment</div></Link>
                    </div> */}

                    <div className="card-cont">
                      <Link to="/billerprofile" className="noUnderline">
                        <ImProfile className="operation-logo-size" />
                        <div>Billing User Profile</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="/feedback" className="noUnderline">
                        <MdOutlineFeedback className="operation-logo-size" />
                        <div>Feedback</div>{" "}
                      </Link>
                    </div>
                  </div>

                  <h3 style={{ marginTop: "20px" }}>
                    <u>Set The Configuration for the Resturant</u>
                  </h3>

                  <div className="d-flex">
                    <div className="card-cont">
                      <Link to="" className="noUnderline">
                        <BiSolidFoodMenu className="operation-logo-size" />
                        <div>Menu</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline">
                        <IoMdPrint className="operation-logo-size" />
                        <div>Bill / KOT Print</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline">
                        <FaPercent className="operation-logo-size" />
                        <div>Tax</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline">
                        <CiDiscount1 className="operation-logo-size" />
                        <div>Discount</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline">
                        <LuScreenShare className="operation-logo-size" />
                        <div>Billing Screen</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline">
                        <IoSettingsSharp className="operation-logo-size" />
                        <div>Settings</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline">
                        <FaBookOpen className="operation-logo-size" />
                        <div>Menu Item On off</div>
                      </Link>
                    </div>
                    <div className="card-cont">
                      <Link to="" className="noUnderline">
                        <CgDanger className="operation-logo-size" />
                        <div>Service Renewal</div>
                      </Link>
                    </div>
                  </div>
                  <div className="card-cont">
                    <Link to="" className="noUnderline">
                      <TbStatusChange className="operation-logo-size" />
                      <div>Customer Order Status</div>
                    </Link>
                  </div>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;

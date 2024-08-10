import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Layout,
  Table,
  theme,
  Radio,
  Form,
  Input,
  Tag,
  Space,
  Checkbox,
  Dropdown,
  Menu,
  Flex,
  Divider
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
  SmileOutlined,
  PrinterOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

import Logo from "../../../sidebarcomponents/Logo";
import MenuList from "../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../sidebarcomponents/ToggleThemeButton";
const { Header, Content, Footer, Sider } = Layout;

function Cashflow() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  

  const [value, setValue] = useState(1);

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

  //Table

 


  //Table

  const dataSource = [
    {
      key: "1",
      kot:1,
      order:"Take Away",
      num:'',
      name:'',
      noItem:1,
      status:'Used in Bills',
      created:'15-05-2024',
      printDt:'15-05-2024',
      duration:'-',
           

    },
  ]

  const columns = [
    {
      title: "KOT No",
      dataIndex: "kot",
    },
    {
        title: "Order Type",
        dataIndex: "order",
      },
      {
          title: "Customer Number",
          dataIndex: "num",
        },
        {
            title: "Customer Name",
            dataIndex: "name",
          },

    
          {
            title: "No of Items",
            dataIndex: "noItem",
          },
          {
              title: "Status",
              dataIndex: "status",
            },
            {
                title: "Created",
                dataIndex: "created",
              },
              {
                  title: "Bill Print Date",
                  dataIndex: "printDt",
                },
                {
                    title: "Complete Duration",
                    dataIndex: "duration",
                  },

                  {
                    title: "Action",
                    key: "action",
                    render: (text, record) => (
                      <Flex style={{gap:'1rem'}}>
                        <Link to='view'>
                        <Button>
                           View
                        </Button>
                        </Link>
                        
                        <Button>
                          Reprint
                        </Button>
                      </Flex>
                    ),
                  },
              
                  
  ];

  // const dataSource = [
  //   {
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //   },
  // ];

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
          // style={{
          //   overflow: 'auto',
          //   height: '100vh',
          //   position: 'fixed',
          //   left: 0,
          //   top: 0,
          //   bottom: 0,
          // }}
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
    <h3>Petty Cash Assign Listing</h3>
    <Button icon={<ArrowLeftOutlined />}>Back</Button>
</Flex>

             
          </Header>
          <Layout>
            
            {/* {Body} */}


            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px'}}>


              <Table
                    //   scroll={{
                    //     x: 100,
                    //   }}
                      pagination={false}
                    //   dataSource={dataSource}
                    //   columns={columns}
                    />


            </Layout>
            
      
          </Layout>

          <Footer style={{ textAlign: "center" }}>
              Click Uptel ©{new Date().getFullYear()} Created by ClickUptel Team
            </Footer>
          
        </Layout>

        

        
      </Layout>
    </>
  );
}

export default Cashflow;

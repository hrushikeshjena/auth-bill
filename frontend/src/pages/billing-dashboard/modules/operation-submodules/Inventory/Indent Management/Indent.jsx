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
  Divider,
  Select
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
  SmileOutlined,
  PrinterOutlined,
  ArrowLeftOutlined,
  EditOutlined,
  EyeOutlined,
  StarFilled,
  StarOutlined,
  ClearOutlined,
  ExclamationCircleOutlined,
  RightOutlined,
  CalculatorOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

import Logo from "../../../../sidebarcomponents/Logo";
import MenuList from "../../../../sidebarcomponents/MenuList";
import ToggleThemeButton from "../../../../sidebarcomponents/ToggleThemeButton";
const { Header, Content, Footer, Sider } = Layout;

function Indent() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  

  const [value, setValue] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

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

  
  const dataSource = [
    {
        qty:<Input/>,
        item:<Select
        defaultValue="Select Item"
        style={{
          width: 120,
        }}
        options={[
          {
            value: 'Jack',
            label: 'Jack',
          },
          {
            value: 'Lucy',
            label: 'Lucy',
          },
          {
            value: 'Yiminghe',
            label: 'Yiminghe',
          },
        ]}
      />
        
    },
  ];

  const columns = [
    {
        title:"Items",
        dataIndex: 'item'
    },
    {
        title:"Quantity",
        dataIndex: 'qty'
    },
    {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Flex style={{ gap: '1rem' }}>
                <Button><ClearOutlined /></Button>
                
          </Flex>
        ),
      },

  ]
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
    <h3>Indent Management</h3>
    <Flex style={{gap:'1rem'}} align="center">
        <Button icon={<ArrowLeftOutlined />}>Back</Button>
    </Flex>
    
</Flex>

             
          </Header>
          <Layout>
            
            {/* {Body} */}


            <Layout style={{margin:'2rem',border:'solid 1px grey', borderRadius:'10px', padding:'1rem', gap:'1rem'}}>

                <Flex justify="space-between">
                    <h6>Enter item(s) to get Calculation</h6>
                    <Flex gap='1rem'>
                        <Button type="primary" danger>Add New</Button>
                        <Button>Clear All</Button>
                    </Flex>
                </Flex>

                <Table 
                      pagination={false}
                      dataSource={dataSource}
                      columns={columns}
                />
                <Flex justify="space-between">
                    <p className="text-danger"><ExclamationCircleOutlined />Note: Select raw material and click the calculate to generate indent</p>
                    <Flex gap='1rem'>
                        <Button><RetweetOutlined />Reset</Button>
                        <Button type="primary" danger><CalculatorOutlined />Calculate<RightOutlined /></Button>
                    </Flex>
                </Flex>

            

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

export default Indent;

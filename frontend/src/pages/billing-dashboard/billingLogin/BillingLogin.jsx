
import { FaBeer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button, Layout, Checkbox, Form, Input } from "antd";
import { theme } from "antd";
// import BillingImage from "../../assets/billing.png";
const { Header, Content, Footer } = Layout;
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/billing");
  };
  return (
    <>
      <Layout>
        <Layout>
          <Header
            style={{ padding: 10, background: colorBgContainer }}
            className="passcode-h"
          >
            <div className="d-flex justify-content-between">
              <h4>Click Uptel</h4>

              <div>
                <div className="refno-p">Chai Bar</div>
                <div className="refno-p">Ref. : 326578</div>
              </div>
            </div>
          </Header>

          <Layout>
            <Content>
              <div className="">
                <div className="mainbilling-container">
                  <div className="d-flex">
                    <div className="billing-icon">
                      {/* <img src={BillingImage} alt="billing" /> */}
                    </div>
                    <div className="billing-login">
                      <div className="d-flex justify-content-center">
                        <div>
                          <h3>Login to Billing Station</h3>
                          <div>
                            <Form
                              name="basic"
                              labelCol={{
                                span: 8,
                              }}
                              wrapperCol={{
                                span: 16,
                              }}
                              style={{
                                maxWidth: 600,
                              }}
                              initialValues={{
                                remember: true,
                              }}
                              autoComplete="off"
                            >
                              <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your username!",
                                  },
                                ]}
                              >
                                <Input />
                              </Form.Item>

                              <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your password!",
                                  },
                                ]}
                              >
                                <Input.Password />
                              </Form.Item>

                              <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                  offset: 8,
                                  span: 16,
                                }}
                              >
                                <Checkbox>Remember me</Checkbox>
                              </Form.Item>

                              <Form.Item
                                wrapperCol={{
                                  offset: 8,
                                  span: 16,
                                }}
                              >
                                <Button
                                  type="primary"
                                  onClick={handleLogin}
                                  htmlType="submit"
                                >
                                  Login
                                </Button>
                              </Form.Item>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="billing-side-icon">
                      <div>
                        <div className="side-login-icon">
                          <FaBeer />
                          <p>Login</p>
                        </div>
                        <div className="side-login-icon">
                          <FaBeer />
                          <p>Passcode</p>
                        </div>
                        <div className="side-login-icon">
                          <FaBeer />
                          <p>Swipe Card</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Content>
            <Footer
              style={{ textAlign: "center" }}
              className="d-flex justify-content-between"
            >
              <div>
                {" "}
                Need Quick Help? 0709876988 Contact for Support
                support@clickuptel.com
              </div>{" "}
              <div>Version:0.0.0.1</div>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;

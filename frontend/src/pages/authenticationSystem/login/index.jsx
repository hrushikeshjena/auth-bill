import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import signupImage from "../../../assets/logo.png"; // Replace with your actual image path

const { Title } = Typography;

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (values) => {
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, values);
      localStorage.setItem("token", res.data.token); // Ensure the token is set correctly
      setMessage("Login successful!");
      setError(""); // Clear the error message
      setTimeout(() => {
        window.location = "/";
      }, 2000); // Redirect after showing the success message
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setMessage(""); // Clear the success message
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.card} bordered={false}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <Title level={2}>Login to Your Account</Title>
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              className={styles.form_container}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Email"
                  onChange={handleChange}
                  value={data.email}
                />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                  onChange={handleChange}
                  value={data.password}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles.white_btn}
                >
                  Sign In
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/forget-password" style={{ alignSelf: "flex-start" }}>
                  <Typography.Link>Forgot Password?</Typography.Link>
                </Link>
              </Form.Item>
              {error && <Alert message={error} type="error" showIcon />}
              {message && <Alert message={message} type="success" showIcon />}
            </Form>
          </div>
          <div className={styles.right}>
            <div className={styles.signup_info}>
              <img
                src={signupImage}
                alt="Sign Up Illustration"
                className={styles.signup_image}
              />
              <Title level={4}>New to Our Billing Platform?</Title>
              <p>
                Join us today and start managing your invoices and payments
                effortlessly. Create an account now!
              </p>
              <Link to="/signup">
                <Button type="default" className={styles.white_btn}>
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

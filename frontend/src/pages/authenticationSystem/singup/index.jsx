import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography, Alert } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import welcomeBackImage from "../../../assets/logo.png"; // Replace with your actual image path

const { Title } = Typography;

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, values);
      setMessage(res.message);
      setLoading(false);
      setError(""); // Clear the error message
      console.log(res.message);
    } catch (error) {
      setLoading(false);

      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
      setMessage(""); 
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.card} bordered={false}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <img
              src={welcomeBackImage}
              alt="Welcome Back"
              className={styles.welcome_back_image}
            />
            <Title level={2}>Welcome Back</Title>
            <p>
              Already have an account? Sign in to continue managing your billing
              tasks.
            </p>
            <Link to="/login">
              <Button type="default" className={styles.white_btn}>
                Sign In
              </Button>
            </Link>
          </div>
          <div className={styles.right}>
            <Title level={2}>Create Account</Title>
            <Form
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="First Name"
                  onChange={handleChange}
                  value={data.firstName}
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={data.lastName}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
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
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className={styles.green_btn}
                >
                  Sign Up
                </Button>
              </Form.Item>
              {error && <Alert message={error} type="error" showIcon />}
              {message && <Alert message={message} type="success" showIcon />}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

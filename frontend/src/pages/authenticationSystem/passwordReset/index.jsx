import { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Alert, Card, Typography } from "antd";
import {FrownOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

const { Title } = Typography;

const Index = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const { id, token } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:8080/api/password-reset/${id}/${token}`;

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
        console.error("Error verifying URL:", error);
      }
    };
    verifyUrl();
  }, [id, token, url]);

  const handleSubmit = async (values) => {
    try {
      const { data } = await axios.post(url, { password: values.password });
      setMsg(data.message);
      setError("");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
        setMsg("");
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <Fragment>
      {validUrl ? (
        <div className={styles.container}>
          <Card className={styles.card} title={<Title level={2}>Add New Password</Title>}>
            <Form onFinish={handleSubmit}>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your new password!" },
                  { min: 8, message: "Password must be at least 8 characters long!" },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="New Password" />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  { required: true, message: "Please confirm your new password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              {error && (
                <Form.Item>
                  <Alert message={error} type="error" showIcon />
                </Form.Item>
              )}
              {msg && (
                <Form.Item>
                  <Alert message={msg} type="success" showIcon />
                </Form.Item>
              )}
              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.submitButton}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      ) : (
        <div className={styles.container}>
          <Card className={styles.card} title={<Title level={2}>Invalid URL</Title>}>
            <FrownOutlined style={{ fontSize: "48px", color: "#ff4d4f" }} />
            <Title level={4}>The URL is invalid or has expired.</Title>
          </Card>
        </div>
      )}
    </Fragment>
  );
};

export default Index;



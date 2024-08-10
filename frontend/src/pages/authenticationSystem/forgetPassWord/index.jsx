import { useState } from "react";
import axios from "axios";
import { Card, Input, Button, notification, Form } from "antd";
import styles from "./styles.module.css";

const ForgotPasswordCard = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const openNotification = () => {
    notification.success({
      message: 'Email Sent',
      description: 'A password reset link has been sent to your email address.',
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = `http://localhost:8080/api/password-reset/`;
      await axios.post(url, { email });
      setLoading(false);
      openNotification();
      setEmail("");
    } catch (error) {
      setLoading(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        notification.error({
          message: 'Error',
          description: error.response.data.message,
        });
      } else {
        notification.error({
          message: 'Error',
          description: 'An unexpected error occurred.',
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      <Card title="Forgot Password" className={styles.card}>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              type="email"
              placeholder="Email"
              value={email}
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPasswordCard;

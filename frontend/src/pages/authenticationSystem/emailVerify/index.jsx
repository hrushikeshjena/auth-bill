import { useState, useEffect, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button, Result } from 'antd';
import axios from 'axios';

const Index = () => {
    const [validUrl, setValidUrl] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Params:', params);
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:8080/api/users/${params.id}/verify/${params.token}`;
                const { data } = await axios.get(url);
                console.log('Verification success:', data);
                setValidUrl(true);
                setIsModalVisible(true);
            } catch (error) {
                console.log('Verification error:', error);
            }
        };
        verifyEmailUrl();
    }, [params]);

    const handleOk = () => {
        setIsModalVisible(false);
        navigate('/login');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Fragment>
            {validUrl ? (
                <Modal
                    title="Email Verification"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="submit" type="primary" onClick={handleOk}>
                            Login
                        </Button>,
                    ]}
                >
                    <p>Email Verified Successfully</p>
                </Modal>
            ) : (
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
                />
            )}
        </Fragment>
    );
};

export default Index;

import React, {FC} from 'react';
import { Row, Col, Button, Space } from 'antd';
import Content from "../Content/Content";
import { Link } from 'react-router-dom';

const Header:FC<any> = ():JSX.Element => {
    return (
        <header>
            <Content isPage={false}>
                <Row justify="space-between">
                    <Col>
                        {/*@ts-ignore*/}
                        <Link to="/" alt="Demo" className="header-title">
                            DEMO Streaming
                        </Link>
                    </Col>
                    <Col>
                        <Space size={25}>
                            <Link to="/login" className="login-widget-link">
                            Log in
                            </Link>
                            <Button ghost className="header-trial-button">
                                Start your free trial
                            </Button>
                        </Space>
                    </Col>
                </Row>
            </Content>
        </header>
    );
}
export default Header;
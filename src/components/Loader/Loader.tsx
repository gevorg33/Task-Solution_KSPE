import React, {FC} from 'react';
import { Row, Col, Spin } from 'antd';

const Loader:FC<any> = ():JSX.Element => {
    return (
        <Row justify="center" align="middle">
            <Col>
                <Spin size="large" />
            </Col>
        </Row>
    );
}
export default Loader;
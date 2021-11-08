import React, {FC, PropsWithChildren} from 'react';
import Content from "../Content/Content";
import { Divider, Row, Col, Space } from 'antd';
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../../assets/social";
import { AppStoreIcon, PlayStoreIcon, WindowsStoreIcon } from "../../../assets/store";
import { Link } from 'react-router-dom';

const Footer:FC<any> = (props:PropsWithChildren<any>):JSX.Element => {
    const menuList:any[] = [
        'Home',
        'Terms and Conditions',
        'Privacy Policy',
        'Collection Statement',
        'Help',
        'Manage Account',
    ];

    // @ts-ignore
    return (
        <footer>
            <Content isPage={false}>
                <Row>
                    {menuList
                        .map(m => (
                            <Col key={m}>
                                {/*@ts-ignore*/}
                                <Link to="/" alt={m} className="footer-text-link">
                                    {m}
                                </Link>
                            </Col>
                        ))
                        .reduce((previous:any, current:any):any => [
                            previous,
                            <Divider
                                type="vertical"
                                key={current}
                                className="footer-link-separator"
                            />,
                            current,
                        ])}
                </Row>
                <Row>
                    <Col>
            <span className="footer-description-text">
              Copyright @ 2021 DEMO Streaming All Rights Reserved
            </span>
                    </Col>
                </Row>
                <Row
                    justify="space-between"
                    align="middle"
                    className="footer-social-store-wrapper">
                    <Col>
                        <Space size={20}>
                            <FacebookIcon className="footer-social-button" />
                            <InstagramIcon className="footer-social-button" />
                            <TwitterIcon className="footer-social-button" />
                        </Space>
                    </Col>
                    <Col>
                        <Space size={20}>
                            {/*@ts-ignore*/}
                            <a href="https://www.apple.com/app-store" alt="apple">
                                <AppStoreIcon/>
                            </a>
                            {/*@ts-ignore*/}
                            <a href="https://play.google.com/store/apps" alt="google">
                                <PlayStoreIcon/>
                            </a>
                            {/*@ts-ignore*/}
                            <a href="https://www.microsoft.com/en-us/store" alt="microsoft">
                                <WindowsStoreIcon style={{ width: 120 }}/>
                            </a>
                        </Space>
                    </Col>
                </Row>
            </Content>
        </footer>
    );
}
export default Footer;
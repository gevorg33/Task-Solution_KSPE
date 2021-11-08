import React, {FC} from "react";
import { Row, Col, Space } from 'antd';
import Card from "../../components/CardComponent/CardComponent";
import PageTitle from "../../components/PageTitle/PageTitle";

const HomePage:FC = ():JSX.Element => (
    <main>
        <PageTitle title="Popular Titles" />
        <Row justify="center" className="home-page-space">
            <Col>
                <Space size={40}>
                    <Card
                        isLarge={true}
                        direction="/series"
                        title="Popular Series"
                        imageUrl="/assets/series.png"
                    />
                    <Card
                        isLarge={true}
                        direction="/movies"
                        title="Popular Movies"
                        imageUrl="/assets/movies.jpg"
                    />
                </Space>
            </Col>
        </Row>
    </main>
)

export default HomePage;

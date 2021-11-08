import React, {FC, PropsWithChildren} from 'react';
import { Row, Col } from 'antd';
import Card from "../CardComponent/CardComponent";

interface IcardList{
    list: any[]
};

const CardList:FC<IcardList> = (props:PropsWithChildren<IcardList>):JSX.Element => (
    <Row gutter={[25, 45]} justify="center" align="middle">
        {props.list &&
        props.list.map((m:any) => (
            <Col key={m.title}>
                <Card
                    isLarge={false}
                    title={m.title}
                    direction={`/content/${m.title.length}`}
                    imageUrl={m.images['Poster Art'].url}>
                    {m.title}
                </Card>
            </Col>
        ))}
    </Row>
);

export default CardList;
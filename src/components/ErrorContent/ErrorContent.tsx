import React, {FC} from 'react';
import { Result, Button } from 'antd';
import Content from "../Layouts/Content/Content";
import { useHistory } from 'react-router-dom';

interface IErrorContent{
    error: ErrorConstructor;
}

const ErrorContent:FC<IErrorContent> = (props):JSX.Element => {
    const history = useHistory();

    return (
        <Content isPage={false}>
            <Result
                status="500"
                title="Oops!"
                subTitle="Something went wrong."
                extra={
                    <Button onClick={() => history.push('/')} type="primary">
                        Back Home
                    </Button>
                }
            />
        </Content>
    );
};

export default ErrorContent;
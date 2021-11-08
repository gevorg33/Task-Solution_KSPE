import React, {FC} from 'react';

interface Icontent{
    isPage: boolean;
    children?: React.ReactNode;
}

const Content:FC<Icontent> = (props):JSX.Element => {
    return (
        <div
            className={props.isPage ? 'content-container-page' : 'content-container'}>
            {props.children}
        </div>
    );
};

export default Content;
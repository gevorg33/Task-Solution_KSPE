import React, {FC, PropsWithChildren} from 'react';

interface Icontent{
    isPage: boolean;
    children?: React.ReactNode;
}

const Content:FC<Icontent> = (props:PropsWithChildren<Icontent>):JSX.Element => {
    return (
        <div
            className={props.isPage ? 'content-container-page' : 'content-container'}>
            {props.children}
        </div>
    );
};

export default Content;
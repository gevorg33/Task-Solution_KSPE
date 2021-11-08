import React, {FC} from 'react';

interface IPageTitle{
    title: string;
}

const PageTitle:FC<IPageTitle> = (props):JSX.Element => {
    return <h1 className="page-title">{props.title}</h1>;
};

export default PageTitle;
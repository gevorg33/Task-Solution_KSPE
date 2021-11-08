import React from 'react';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RouteList from "../RoutesProvider/RouteList";
import Content from "../Content/Content";

const Layout:React.FC<any> = ():JSX.Element => {
    return (
        <>
            <Header />
            <Content isPage={true}>
                <RouteList />
            </Content>
            <Footer />
        </>
    );
}
export default Layout;
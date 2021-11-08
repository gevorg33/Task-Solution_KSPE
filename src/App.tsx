import React, {FC} from 'react';
import Layout from "./components/Layouts/MainLayout/MainLayout";
import { BrowserRouter } from 'react-router-dom';

const App:FC = ():JSX.Element => {
    return (
        <BrowserRouter>
                <Layout />
        </BrowserRouter>
    );
}
export default App;
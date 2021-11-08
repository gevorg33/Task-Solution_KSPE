import React, {FC} from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from "../../../pages/Homepage/Homepage";
import NotFound from "../../../pages/NotFoundPage/NotFound";
import MoviesPage from "../../../pages/MoviesPage/MoviesPage";
import SeriesPage from "../../../pages/SeriesPage/SeriesPage";

const RoutesProvider:FC<any> = ():JSX.Element => {
    return (
        <Switch>
            <Route path="/movies">
                <MoviesPage />
            </Route>
            <Route path="/series">
                <SeriesPage />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
export default RoutesProvider;
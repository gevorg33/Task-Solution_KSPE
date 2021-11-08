import React, {FC, useEffect, useState} from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { getSeries } from "../../service/contentService/contentService";
import ErrorContent from "../../components/ErrorContent/ErrorContent";
import CardList from "../../components/CardList/CardList";
import SearchWidget from "../../components/SearchInput/SearchInput";
import Loader from "../../components/Loader/Loader";


const SeriesPage:FC = ():JSX.Element => {
    const [error, setError] = useState<null | never>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [series, setMovies] = useState<any[]>([]);

    useEffect(() => {
        (() => {
            setIsLoading(true);
            getSeries()
                .then((data:any) => setMovies(data))
                .catch(err => setError(err))
                .finally(() => setIsLoading(false));
        })();
    }, []);

    return (
        <main>
            <PageTitle title="Popular Series" />
            {error && <ErrorContent error={error} />}
            {isLoading && <Loader />}
            <SearchWidget list={series} />
            <CardList list={series} />
        </main>
    )
}

export default SeriesPage;

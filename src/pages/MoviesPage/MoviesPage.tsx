import React, {FC, useEffect, useState} from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { getMovies } from "../../service/contentService/contentService";
import ErrorContent from "../../components/ErrorContent/ErrorContent";
import Loader from "../../components/Loader/Loader";
import CardList from "../../components/CardList/CardList";
import SearchWidget from "../../components/SearchInput/SearchInput";

const MoviesPage:FC = ():JSX.Element => {
    const [error, setError] = useState<null | never>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        (() => {
            setIsLoading(true);
            getMovies()
                .then((data:any) => setMovies(data))
                .catch(err => setError(err))
                .finally(() => setIsLoading(false));
        })();
    }, []);

    return (
        <main>
            <PageTitle title="Popular Movies" />
            {error && <ErrorContent error={error} />}
            {isLoading && <Loader />}
            <SearchWidget list={movies} />
            <CardList list={movies} />
        </main>
    )
}

export default MoviesPage;

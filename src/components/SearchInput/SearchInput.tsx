import React, {FC, PropsWithChildren, useState} from 'react';
import CardList from "../CardList/CardList";

interface IsearchInput{
    list: any[];
}

const SearchInput:FC<IsearchInput> = (props:PropsWithChildren<IsearchInput>):any => {
    const [searchedList, setSearchedList] = useState<any[]>([]);
    const search = (e:any) => {
        const searchedWord = e.target.value;
        if (searchedWord === '') setSearchedList([]);
        else {
            const list = props.list.filter(
                (f:any) => f.title.search(new RegExp(searchedWord, 'i')) !== -1
            );
            // @ts-ignore
            setSearchedList([...list]);
        }
    };

    return (
        props.list.length > 0 && (
            <div
                className={
                    searchedList.length > 0
                        ? 'search-widget-wrapper search-widget-line'
                        : 'search-widget-wrapper'
                }>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={search}
                    className="search-widget-input"
                />
                <CardList list={searchedList} />
            </div>
        )
    );
};

export default SearchInput;
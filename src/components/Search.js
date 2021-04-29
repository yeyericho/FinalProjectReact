import React, { useState } from 'react';
import { setLoading } from '../store/actions/movieActions';

export const Search = ({ searchMovie }) => {

    const [searchValue, setSearchValue] = useState('')

    const handleInput = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    }

    const handleSearchMovies = (e) => {
        e.preventDefault();
        searchMovie(searchValue);
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        setSearchValue('');
    }

    return (
        <form className="search">
            <input type="text" onChange={handleInput}
                placeholder='Search...'
            ></input>
            <button type="submit" onClick={handleSearchMovies}>Search</button>
        </form>
    );
};


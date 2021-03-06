import { React, createContext, useState } from 'react';
import axios from '../axios';
import requests from '../consults.js';

const PokemonContext = createContext();

function PokemonProvider(props) {
    const home = 'https://pokeapi.co/api/v2';

    const [fetchData, setFetchData] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const [fetchValue, setFetchValue] = useState('');

    async function fetchData_Function() {
        const req = await axios.get(requests.fetchHome);
        console.log(req.data);
        setFetchData(req.data);
        setIsFetching(true);
        return req;
    }

    async function fetchData_Function_Link() {
        const req = await axios.get(localStorage.getItem("url"));
        console.log(req.data);
        setFetchData(req.data);
        setIsFetching(true);
        return req;
    }

    function getID(link) {
        let valueToSkip = home.length + 9;
        let url = link.slice(valueToSkip);
        return url;
    }

    function setFetch_Value(link) {
        let valueToSkip = home.length;
        let url = link.slice(valueToSkip);
        localStorage.setItem("url", url);
        setFetchValue(url);
        setIsFetching(false);
    }

    function resetFetching() {
        setIsFetching(false);
    }

    return (
        <PokemonContext.Provider value={
            {
                fetchData,
                setFetchData,
                isFetching,
                setIsFetching,
                fetchData_Function,
                fetchData_Function_Link,
                getID,
                home,
                fetchValue,
                setFetchValue,
                setFetch_Value,
                resetFetching
            }
        }>{props.children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider };
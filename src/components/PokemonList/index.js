import { React, useEffect, useContext } from 'react';
import { PokemonUl, PokemonLi, PokemonButton } from './style';
import { PokemonContext } from '../PokemonContext';


const PokemonList = () => {
    const { home, fetchData, isFetching, fetchData_Function, setFetch_Value, getID } = useContext(PokemonContext);

    useEffect(() => {
        fetchData_Function();
    }, [home])

    return (
        <div>
            {
                isFetching && <>
                    <h1>Pokemon List</h1>
                    <PokemonUl>
                        {
                            fetchData.results.map((result, index) => (
                                <PokemonLi key={index}>
                                    <PokemonButton to={`/:${getID(result.url)}`} onClick={() => { setFetch_Value(result.url) }}>{result.name}</PokemonButton>
                                </PokemonLi>
                            ))
                        }
                    </PokemonUl>
                    <p>{fetchData.results.length}/{fetchData.count}</p>
                </>
            }
        </div>
    )
}

export default PokemonList;
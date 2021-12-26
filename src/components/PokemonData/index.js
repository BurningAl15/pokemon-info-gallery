import { React, useEffect, useContext } from 'react';
import Abilities from '../Abilities';
import ItemsHeld from '../ItemsHeld';
import PokemonStatus from '../Status';
import { PokemonContext } from '../PokemonContext';
import { MainButton, PokemonDataTitle, ContainerFlex } from "./style";
import { BsArrowLeft } from "react-icons/bs";
import PokemonSprites from "../PokemonSprites";
import PokemonStats from "../PokemonStats";

const PokemonData = () => {
    const { home, fetchData, isFetching, fetchData_Function_Link, resetFetching } = useContext(PokemonContext);

    useEffect(() => {
        fetchData_Function_Link();
    }, [home])

    return (
        <>
            {
                isFetching && <>
                    <MainButton to="/" onClick={() => { resetFetching() }}><BsArrowLeft /></MainButton>
                    <PokemonDataTitle>{fetchData.name.toUpperCase()}</PokemonDataTitle>
                    <ContainerFlex>
                        <PokemonStatus data={fetchData} />
                        <PokemonSprites data={fetchData} />
                    </ContainerFlex>
                    <PokemonStats data={fetchData} />
                    <Abilities abilities={fetchData.abilities} />
                    <ItemsHeld held_items={fetchData.held_items} />
                </>
            }
        </>
    )
}

export default PokemonData;
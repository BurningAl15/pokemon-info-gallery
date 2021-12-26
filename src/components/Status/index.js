import { React } from 'react';
import { StatusContainer, StatusTitle, StatusID, StatusBaseExperience, StatusHeight, StatusWeight } from "./style";
import PokemonTypes from "../PokemonTypes";


const PokemonStatus = ({ data }) => {
    return (
        <StatusContainer>
            <StatusTitle>Status</StatusTitle>
            <PokemonTypes data={data} />
            <StatusID>Pokemon ID: {data.id}</StatusID>
            <StatusBaseExperience>Base Experience: {data.base_experience}</StatusBaseExperience>
            <StatusHeight>Pokemon Height: {data.height}</StatusHeight>
            <StatusWeight>Pokemon Weight: {data.weight}</StatusWeight>
        </StatusContainer>
    )
}

export default PokemonStatus;
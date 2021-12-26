import { React } from 'react';
import { PokemonTypeContainer, PokemonTypeElement } from './style';

const PokemonTypes = ({ data }) => {
    return (
        <PokemonTypeContainer>
            {
                data.types.map((type, index) => (
                    <PokemonTypeElement className={type.type.name} key={index}>
                        {type.type.name.toUpperCase()}
                    </PokemonTypeElement>
                ))
            }
        </PokemonTypeContainer>
    )
}

export default PokemonTypes;
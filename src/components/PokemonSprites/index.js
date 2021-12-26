import { React } from 'react';
import { SpriteContainer, SpriteSubSectionContainer } from './style';

const PokemonSprites = ({ data }) => {
    return (
        <SpriteContainer>
            <h2>Sprites</h2>
            <SpriteSubSectionContainer>
                {
                    data.sprites.back_default &&
                    <img src={data.sprites.back_default} />
                }
                {
                    data.sprites.front_default &&
                    <img src={data.sprites.front_default} />
                }
                {
                    data.sprites.back_female &&
                    <img src={data.sprites.back_female} />
                }
                {
                    data.sprites.front_female &&
                    <img src={data.sprites.front_female} />
                }
            </SpriteSubSectionContainer>

            <SpriteSubSectionContainer>
                {
                    data.sprites.back_shiny &&
                    <img src={data.sprites.back_shiny} />
                }
                {
                    data.sprites.front_shiny &&
                    <img src={data.sprites.front_shiny} />
                }
                {
                    data.sprites.back_shiny_female &&
                    <img src={data.sprites.back_shiny_female} />
                }
                {
                    data.sprites.front_shiny_female &&
                    <img src={data.sprites.front_shiny_female} />
                }
            </SpriteSubSectionContainer>
        </SpriteContainer>
    )
}

export default PokemonSprites;
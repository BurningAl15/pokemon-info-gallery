import { React } from 'react';
import { PokemonContainer, PokemonStatsContainer, PokemonStatElement } from './style';

const PokemonStats = ({ data }) => {
    return (
        <PokemonContainer>
            <h2>Stats</h2>
            <PokemonStatsContainer>

                {data.stats.map((stat, index) => (
                    <PokemonStatElement key={index}>
                        <h3>{stat.stat.name}</h3>
                        <p>{stat.base_stat}</p>
                    </PokemonStatElement>
                ))}
            </PokemonStatsContainer>
        </PokemonContainer>
    )
}

export default PokemonStats;
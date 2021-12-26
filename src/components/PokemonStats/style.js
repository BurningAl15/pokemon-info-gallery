import styled from 'styled-components';

export const PokemonContainer = styled.div`

`

export const PokemonStatsContainer = styled.ul`
    list-style-type:none;
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:20px auto;
    flex-wrap:wrap;
    flex-shrink:3;
    width:calc(90% - 30px);
`

export const PokemonStatElement = styled.li`
    min-width:60px;
    padding:10px;
    background:gray;
    border-radius:10px;
    margin:0 auto;
`
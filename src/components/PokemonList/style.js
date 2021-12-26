import styled from 'styled-components';
import { Link } from "react-router-dom";

export const PokemonUl = styled.ul`
    display:flex;
    flex-wrap:wrap;
    flex-shrink:3;
    list-style-type:none;
    margin:auto;
    height:90vh;
`

export const PokemonLi = styled.li`
    width:100px;
    padding:10px;
    margin:auto;
`
export const PokemonButton = styled(Link)`
    text-decoration:none;
    color:white;
    font-size:16px;
    background:transparent;
    border:none;
    padding:10px;
    border-radius:10px;
    cursor:pointer;
`
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
    max-width:100px;
    min-width:100px;
    padding:10px;
    margin:auto;
`
// export const PokemonButton = styled(Link)`
//     width:100%;
//     text-decoration:none;
//     color:white;
//     font-size:16px;
//     background:transparent;
//     border:none;
//     padding:10px;
//     border-radius:10px;
//     border:2px solid white;
//     cursor:pointer;
// `

export const PokemonButton = styled(Link).attrs(() => ({ tabIndex: 0 }))`
    width:100%;
    text-decoration:none;
    color:white;
    font-size:16px;
    background:transparent;
    border:none;
    padding:10px;
    border-radius:10px;
    border:2px solid white;
    cursor:pointer;
    transition: all .1s ease;

    &:hover{
        font-size:18px;
        background:#D5A100;
        border:2.5px solid white;
    }
`
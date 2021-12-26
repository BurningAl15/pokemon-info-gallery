import styled from 'styled-components';
import { Link } from "react-router-dom";

export const ContainerFlex = styled.div`
    width:100%;
    display:flex;
`

export const MainButton = styled(Link)`
    color:white;
    font-size:40px;
    position:absolute;
    left:10px;
`

export const PokemonDataTitle = styled.h1`
    margin-top:20px;
`
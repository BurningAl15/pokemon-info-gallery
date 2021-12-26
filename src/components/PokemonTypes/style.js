import styled from 'styled-components';

export const PokemonTypeContainer = styled.ul`
    display:flex;
    list-style-type:none;
    justify-content:space-around;
    align-items:center;
    margin: 10px 0;
`

export const PokemonTypeElement = styled.li.attrs((/* props */) => ({ tabIndex: 0 }))`
    border-radius:30px;
    padding:5px 15px;
    background:aqua;
    border:2px solid white;

    &.normal{
        background:#B9B9B1;
    }
    &.poison{
        background:#A95EA1;
    }
    &.psychic{
        background:#F661B2;
    }

    &.grass{
        background:#8BD44F;
    }
    &.ground{
        background:#EBD061;
    }
    &.ice{
        background:#97F0FE;
    }

    &.fire{
        background:#FB5643;
    }
    &.rock{
        background:#CEBC72;
    }
    &.dragon{
        background:#8975FB;
    }

    &.water{
        background:#54ADFD;
    }
    &.bug{
        background:#BECC1D;
    }
    &.dark{
        background:#8E6957;
    }
   

    &.fighting{
        background:#A05645;
    }
    &.ghost{
        background:#7975D4;
    }
    &.steel{
        background:#C3C1D7;
    }

    &.flying{
        background:#74A2FA;
    }
    &.electric{
        background:#FDE43B;
    }
    &.fairy{
        background:#F8ADFF;
    }
`
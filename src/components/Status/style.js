import styled from 'styled-components';

export const StatusContainer = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    width:200px;
    border-radius:10px;
    padding:20px 10px;
    background:#0075BE;
    margin:20px auto;
    transition: all .3s ease-out;

    &:hover{
        color:#0A285F;
        background:#D5A100;
    }
`

export const StatusTitle = styled.h2`

`

export const StatusID = styled.p`

`

export const StatusBaseExperience = styled.p`

`

export const StatusHeight = styled.p`

`

export const StatusWeight = styled.p`

`

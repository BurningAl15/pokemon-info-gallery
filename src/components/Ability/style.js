import styled from 'styled-components';

export const AbilityLink = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    background:green;
    min-width:300px;
    width:300px;
    border-radius:10px;
    margin-bottom:25px;
    padding:20px 10px;
    text-decoration:none;
    color:white;

    &.yes{
        color: #0A285F;
        background: #D5A100;
    }
`;

export const AbilityContentContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:15px;
`

export const AbilityH3 = styled.h3`
    width:100%;
    color:white;
    font-size:21px;
`;

export const AbilityIsHidden = styled.p`
    width:100%;
    font-size:16px;
`

export const AbilityHasSlot = styled.p`
    width:100%;
    font-size:16px;
`
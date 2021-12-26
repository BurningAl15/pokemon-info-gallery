import { React } from 'react';
import { AbilityH3, AbilityLink, AbilityContentContainer, AbilityIsHidden, AbilityHasSlot } from './style';
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";

const Ability = ({ data, index }) => {
    return (
        <AbilityLink className={data.is_hidden ? 'yes' : 'no'}>
            <AbilityH3>Ability {index}: {data.ability.name}</AbilityH3>
            <AbilityContentContainer>
                <AbilityIsHidden>Is Hidden?: {data.is_hidden ? <BsHandThumbsUpFill /> : <BsHandThumbsDownFill />}</AbilityIsHidden>
                <AbilityHasSlot>Value Slot: {data.slot}</AbilityHasSlot>
            </AbilityContentContainer>
        </AbilityLink>
    )
}

export default Ability;
import { React } from 'react';
import Ability from '../Ability';
import { AbilitiesSubSectionContainer, AbilitiesContainer } from "./style";

const Abilities = ({ abilities }) => {
    return (
        <AbilitiesContainer>
            <h2>Abilities</h2>
            <AbilitiesSubSectionContainer>
                {
                    abilities.map((data, index) => (
                        <Ability key={index} data={data} index={index} />
                    ))

                }
            </AbilitiesSubSectionContainer>
        </AbilitiesContainer>
    );
}
export default Abilities;
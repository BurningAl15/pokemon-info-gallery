import { React } from 'react';
import { RarityHead, RarityVersion } from "./style";

const Rarity = ({ rarity }) => {
    return (
        <>
            <RarityHead>Rarity: {rarity.rarity}</RarityHead>
            <RarityVersion>Version: {rarity.version.name}</RarityVersion>
        </>
    )
}

export default Rarity;
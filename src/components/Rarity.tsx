import React from 'react'
import capitalizeFirst from '../utils/capitalizeFirst';
import { rarityColors } from '../utils/rarity-colors'

const Rarity = ({ rarity, className = "", children = null }) => {
    const colour = rarityColors[rarity];
    return (
        <p style={{ color: colour }} className={"text-2xl font-mono text-center" + (className ? (" " + className) : "")}>{capitalizeFirst(rarity)}{children}</p>
    )
}

export default Rarity
import React from 'react'
import { rarityColors } from '../utils/rarity-colors'

const Rarity = ({ rarity, className = "", children = null }) => {
    const colour = rarityColors[rarity];
    return (
        <p style={{ color: colour }} className={"text-2xl font-mono text-center" + (className ? (" " + className) : "")}>{rarity}{children}</p>
    )
}

export default Rarity
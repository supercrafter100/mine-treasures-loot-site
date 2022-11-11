import React from 'react'
import { rarityColors } from '../utils/rarity-colors'

const Rarity = ({ rarity }) => {
    const colour = rarityColors[rarity];
    return (
        <p style={{ color: colour }} className="text-2xl font-mono text-center">{rarity}</p>
    )
}

export default Rarity
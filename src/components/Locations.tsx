import Image from 'next/image'
import React from 'react'

const Locations = ({ biomes }) => {
    biomes = biomes?.sort();
    return (
        <div className="text-center max-w-[70%] mx-auto">
            <span className="font-mono text-pink-500">{biomes?.join(', ')}</span>
        </div>
    )
}

export default Locations
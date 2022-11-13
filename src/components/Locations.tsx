import Image from 'next/image'
import React from 'react'

const Locations = ({ biomes }) => {
    return (
        <div className="text-center">
            <span className="font-mono text-pink-500">{biomes.join(', ')}</span>
        </div>
    )
}

export default Locations
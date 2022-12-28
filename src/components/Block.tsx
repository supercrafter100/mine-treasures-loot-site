import Image from 'next/image'
import React from 'react'
import capitalizeFirst from '../utils/capitalizeFirst'

const Block = ({ block, width = 24, height = 24 }) => {
    return (
        <div>
            <Image src={"/items/" + block + ".png"} alt={block} width={width} height={height} className="inline-block" />
            <p className="inline-block ml-2">{capitalizeFirst(block.replace(/_/g, ' '))}</p>
        </div>
    )
}

export default Block
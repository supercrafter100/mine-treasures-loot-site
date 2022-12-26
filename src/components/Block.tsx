import Image from 'next/image'
import React from 'react'

const Block = ({ block, width = 24, height = 25 }) => {
    return (
        <div>
            <Image src={"/items/" + block + ".png"} alt={block} width={width} height={height} className="inline-block" />
            <p className="inline-block ml-2">{block.replace(/_/g, ' ')}</p>
        </div>
    )
}

export default Block
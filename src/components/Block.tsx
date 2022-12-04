import Image from 'next/image'
import React from 'react'
import ReactTooltip from 'react-tooltip'

const Block = ({ block, predicate }) => {

    const id = (Math.random() + 1).toString(36).substring(2);

    return (
        <div data-tip data-for={id}>
            <Image src={"/items/" + block + ".png"} alt={block} width={24} height={24} className="inline-block" />
            <p className="inline-block ml-2">{block.replace(/_/g, ' ')}</p>

            <ReactTooltip id={id} effect="solid" className="opacity-100">
                Predicate: {predicate}
            </ReactTooltip>
        </div>
    )
}

export default Block
import React from 'react'
import ReactTooltip from 'react-tooltip'
import { MT_ITEM } from '../interfaces'

const HoverCard = ({ item, id }: { item: MT_ITEM, id: string }) => {
    return (
        <ReactTooltip id={id} effect="solid" className="opacity-100">
            {item.lore.map((line) => <p>{line}</p>)}
        </ReactTooltip>
    )
}

export default HoverCard
import Image from 'next/image'
import React, { useState } from 'react'
import { MT_ITEM } from '../interfaces'
import { rarityColors } from '../utils/rarity-colors'
import HoverCard from './HoverCard'

const Item = ({ item }: { item: MT_ITEM }) => {

    const [tooltip, setTooltip] = useState(false);

    return (
        <div className="relative" >
            <div onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)} >
                <Image className="inline-block" src={"/items/" + item.type + ".png"} alt={item.type} height={24} width={24} />
                <span style={{ color: item.name ? rarityColors.legendary : 'black' }} className={"ml-5 align-middle"}>{item.name ?? item.type.replace(/_/g, ' ')}</span>
            </div>
            {item.lore && <HoverCard item={item} show={tooltip}></HoverCard>}
        </div>
    )
}

export default Item
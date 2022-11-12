import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useState } from 'react'
import { MT_ITEM } from '../interfaces'
import { rarityColors } from '../utils/rarity-colors'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import StatsModal from './StatsModal'
import HoverCard from './HoverCard'


const Item = ({ item }: { item: MT_ITEM }) => {

    const [showModal, setShowModal] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const hasModal = item.attributes || item.enchantments;

    return (
        <div>
            <div onClick={() => setShowModal(true)} className={hasModal && "cursor-pointer"} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
                <Image className="inline-block" src={"/items/" + item.type + ".png"} alt={item.type} height={24} width={24} />
                <span style={{ color: item.name ? rarityColors.legendary : 'black' }} className={"ml-5 align-middle"}>{item.name ?? item.type.replace(/_/g, ' ')}</span>
                {hasModal && <FontAwesomeIcon className="align-middle inline-block ml-1 text-gray-500" icon={faArrowUpRightFromSquare} />}
            </div>
            {hasModal && showModal && <StatsModal item={item} setModal={setShowModal}></StatsModal>}
            {item.lore && <HoverCard item={item} show={showTooltip}></HoverCard>}
        </div>
    )
}

export default Item
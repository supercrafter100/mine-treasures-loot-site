import React from 'react'
import Item from './Item'
import Rarity from './Rarity'

const ItemsCard = ({ rarity, loot }) => {
    return (
        <div>
            <Rarity rarity={rarity}></Rarity>
            {loot.map((item, idx) => <Item item={item} key={idx}></Item>)}
        </div>
    )
}

export default ItemsCard
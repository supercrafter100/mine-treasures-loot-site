import React from 'react'
import { MT_ITEM } from '../interfaces'

const HoverCard = ({ item, show }: { item: MT_ITEM, show: boolean }) => {
    return (
        <>
            {show && (
                <div className={"bg-gray-200 rounded-lg p-2 absolute bottom-[10] z-10"}>
                    {item.lore.map((line) => <p>{line}</p>)}
                </div>
            )
            }
        </>
    )
}

export default HoverCard
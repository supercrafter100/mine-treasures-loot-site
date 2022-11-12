import Image from 'next/image'
import React from 'react'
import { MT_CHANCE } from '../interfaces'
import { rarityColors } from '../utils/rarity-colors'
import { rarityIcons } from '../utils/rarity-icons'

const ChanceSection = ({ ore, chance }: { ore: string, chance: MT_CHANCE }) => {

    return (
        <div>
            <header className="text-center">
                <Image src={"/items/" + rarityIcons[ore] + ".png"} width={36} height={36} alt={ore} className="inline-block"></Image>
                <p className="font-mono text-3xl md:inline-block md:ml-5 align-middle">{ore.replace(/_/g, ' ')}</p>
            </header>
            <div className="grid grid-cols-1 gap-2">
                <span style={{ color: rarityColors["common"] }} className="text-xl font-mono">common: <span className='text-black text-lg'>{chance["common"]}%</span></span>
                <span style={{ color: rarityColors["rare"] }} className="text-xl font-mono">rare: <span className='text-black text-lg'>{chance["rare"]}%</span></span>
                <span style={{ color: rarityColors["epic"] }} className="text-xl font-mono">epic: <span className='text-black text-lg'>{chance["epic"]}%</span></span>
                <span style={{ color: rarityColors["legendary"] }} className="text-xl font-mono">legendary: <span className='text-black text-lg'>{chance["legendary"] ?? "0"}%</span></span>
            </div>
        </div>
    )
}

export default ChanceSection
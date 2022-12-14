import Image from 'next/image'
import React from 'react'
import { MT_CHANCE } from '../interfaces'
import capitalizeFirst from '../utils/capitalizeFirst'
import { rarityColors } from '../utils/rarity-colors'

const ChanceSection = ({ ore, chance, rarityValues }: { ore: string, chance: MT_CHANCE, rarityValues: { common: number, rare: number, epic: number, legendary: number } }) => {

    const commonPercent = Math.round((chance["common"] / rarityValues["common"]) * 100000) / 1000;
    const rarePercent = Math.round((chance["rare"] / rarityValues["rare"]) * 100000) / 1000;
    const epicPercent = Math.round((chance["epic"] / rarityValues["epic"]) * 100000) / 1000;
    const legendaryPercent = Math.round((chance["legendary"] / rarityValues["legendary"]) * 100000) / 1000;

    return (
        <div className="p-5">
            <header className="text-center">
                <Image src={"/items/" + ore + ".png"} width={36} height={36} alt={ore} className="inline-block"></Image>
                <p className="font-mono text-xl md:inline-block md:ml-5 align-middle">{capitalizeFirst(ore.replace(/_/g, ' '))}</p>
            </header>
            <div className="grid grid-cols-1 gap-2">
                <span style={{ color: rarityColors["common"] }} className="text-lg font-mono">Common: <span className='text-black text-sm'>{commonPercent}%</span></span>
                <span style={{ color: rarityColors["rare"] }} className="text-lg font-mono">Rare: <span className='text-black text-sm'>{rarePercent}%</span></span>
                <span style={{ color: rarityColors["epic"] }} className="text-lg font-mono">Epic: <span className='text-black text-sm'>{epicPercent}%</span></span>
                <span style={{ color: rarityColors["legendary"] }} className="text-lg font-mono">Legendary: <span className='text-black text-sm'>{legendaryPercent}%</span></span>
            </div>
        </div>
    )
}

export default ChanceSection
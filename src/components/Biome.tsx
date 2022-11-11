import Image from 'next/image'
import React from 'react'
import { biomeIcons } from '../utils/biome-icons'
const Biome = ({ name }) => {
    return (
        <header className="text-center">
            <Image src={"/items/" + biomeIcons[name] + ".png"} width={48} height={48} alt={name} className="inline-block"></Image>
            <p className="font-mono text-3xl inline-block align-middle ml-5">{name.replace(/_/g, ' ')}</p>
        </header>
    )
}

export default Biome
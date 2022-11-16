import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 mt-10">
            <span className="text-sm text-gray-500 sm:text-center">© {new Date().getFullYear()} <a href="https://supercrafter100.com/" className="hover:underline">Supercrafter100</a>. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
                <li>
                    <a href="https://www.planetminecraft.com/data-pack/mine-treasure/" className="mr-4 hover:underline md:mr-6">Datapack</a>
                </li>
                <li>
                    <a href="https://github.com/supercrafter100/mine-treasures-loot-site" className="mr-4 md:mr-6">Github</a>
                </li>
                <li>
                    <a href="https://www.buymeacoffee.com/supercrafter100" target="_blank"><Image src="/images/buymeacoffee.png" alt="Buy Me A Coffee" height={60} width={144.67} /></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
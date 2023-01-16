import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <Image src="/images/minetreasuretext.png" width={320} height={64} alt={"Mine treasure logo"} className='inline-block align-middle'></Image>
            <nav className="px-4 md:pl-0 block md:inline-block md:float-right h-full">
                <ul className="grid grid-cols-1 md:grid-cols-4 gap-3 h-full">
                    <li className="h-full flex items-center"><Link className="inline-block w-full p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200  align-middle" href="/">Home</Link></li>
                    <li className="h-full flex items-center"><Link className="inline-block w-full p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200" href="/loot">Treasure</Link></li>
                    <li className="h-full flex items-center"><Link className="inline-block w-full p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200" href="https://discord.gg/ASB67acx2Y" passHref><FontAwesomeIcon className="mr-1" icon={faDiscord as any} />Discord</Link></li>
                    <li className="h-full flex items-center"><Link className="inline-block w-full p-1 md:p-3 text-center md:text-left md:px-10 bg-blue-500 rounded-full" href="/download" passHref><FontAwesomeIcon className="mr-1" icon={faDownload} />Download</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
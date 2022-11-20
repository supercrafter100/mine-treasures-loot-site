import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const index = () => {
    return (
        <>
            <Head>
                <title>Mine Treasure</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="bg-white px-6 lg:px-24 py-12 h-screen">
                <header>
                    <h1 className='text-2xl inline-block pl-5'>Mine Treasures</h1>
                    <nav className="pl-2 md:pl-0 block md:inline-block md:float-right">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <li className="p-3"><Link href="/">Home</Link></li>
                            <li className="p-3"><Link href="/loot">Treasure</Link></li>
                            <li className="p-3 px-10 bg-blue-500 rounded-full"><a href="https://www.planetminecraft.com/data-pack/mine-treasure/">Download</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="pt-10 xl:pt-3 grid xl:grid-cols-2 w-full">
                    <section className="flex justify-center items-center">
                        <div className="pl-5">
                            <h1 className="inline-block font-bold text-4xl">Make mining enjoyable again</h1>
                            <p className="max-w-[60%] pt-3">Ever gotten tired of mining endlessly with no goal in mind? No motivation to go strip-mining? No means to go on this repetitive task for ores? Well, this data pack aims to change exactly that.</p>
                            <a href="https://www.planetminecraft.com/data-pack/mine-treasure/" className="mt-10 inline-block px-10 text-white py-3 rounded-full bg-blue-500">Start playing <FontAwesomeIcon icon={faArrowRight} className="align-middle" /></a>
                        </div>
                    </section>
                    <section className="hidden xl:inline-block"><Image src="/images/treasure.svg" alt="header" width={500} height={500}></Image></section>
                </main>
            </div>
            <div className="bg-gray-100 px-6 lg:px-24 py-12">
                <h1 className="text-center text-3xl font-bold">Why this datapack?</h1>
                <section className="w-[90%] md:w-[70%] xl:w-[60%] mx-auto pt-5 grid grid-cols-1 xl:grid-cols-2 gap-0">
                    <div className="2xl:h-64 bg-gray-300 hidden xl:flex items-center">
                        <img className="mx-auto block 2xl:w-full max-h-full" src="/images/treeasure-tiers.gif" alt="treasure tiers gif"></img>
                    </div>
                    <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
                        <div>
                            <h1 className="text-2xl font-medium">Custom treasures</h1>
                            <p>This data pack introduces a whole new way of approaching mining with a huge reward system. Treasure has a chance to spawn when mining a stone-related block. These treasures are divided into several different tiers: Common, Rare, Epic and Legendary.</p>
                        </div>
                    </div>
                    <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
                        <div>
                            <h1 className="text-2xl font-medium">Biome specific</h1>
                            <p>There are biome-specific treasures depending on which biome the player is in, which also motivates different bases in different biomes.</p>
                        </div>
                    </div>
                    <div className="h-72 2xl:h-64 bg-gray-300 hidden xl:flex items-center">
                        <img className="mx-auto block 2xl:w-full max-h-full" src="/images/biomes.jpg" alt="treasure tiers gif"></img>
                    </div>
                    <div className="h-72 2xl:h-64 bg-gray-300 hidden xl:flex items-center">
                        <img className="mx-auto block 2xl:w-full max-h-full" src="/images/items.jpg" alt="treasure tiers gif"></img>
                    </div>

                    <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
                        <div>
                            <h1 className="text-2xl font-medium">Custom items</h1>
                            <p>This data pack includes over 80+ loot tables with custom armor, custom weapons, custom food, custom advancements and custom utility items and randomized stats, making many items feel unique.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default index
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { faArrowRight, faCircleCheck, faCircleExclamation, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Footer from '../components/Footer';
import Review from '../components/Review';
const index = () => {
    return (
        <>
            <Head>
                <title>Mine Treasure</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="bg-white px-6 lg:px-24 py-12 h-screen">
                <header className="mb-7">
                    <h1 className='text-2xl inline-block pl-5'>Mine Treasures</h1>
                    <nav className="pl-4 md:pl-0 block md:inline-block md:float-right">
                        <ul className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            <li className="p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200"><Link href="/">Home</Link></li>
                            <li className="p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200"><Link href="/loot">Treasure</Link></li>
                            <li className="p-1 md:p-3 hover:bg-gray-100 transition-colors duration-200"><Link href="https://discord.gg/ASB67acx2Y">Discord</Link></li>
                            <li className="p-1 md:p-3 text-center md:text-left md:px-10 bg-blue-500 rounded-full"><a href="https://www.planetminecraft.com/data-pack/mine-treasure/">Download</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="pt-10 xl:pt-3 grid xl:grid-cols-2 w-full border-t">
                    <section className="flex justify-center items-center">
                        <div className="pl-5">
                            <h1 className="inline-block font-bold text-4xl">Make mining enjoyable again</h1>
                            <p className="max-w-[60%] pt-3">Ever gotten tired of mining endlessly with no goal in mind? No motivation to go strip-mining? No means to go on this repetitive task for ores? Well, this data pack aims to change exactly that.</p>
                            <a href="https://www.planetminecraft.com/data-pack/mine-treasure/" className="mt-5 md:mt-10 inline-block px-10 text-white py-3 rounded-full bg-blue-500">Start playing <FontAwesomeIcon icon={faArrowRight} className="align-middle" /></a>
                        </div>
                    </section>
                    <section className="hidden xl:inline-block"><Image src="/images/treasure.svg" alt="header" width={500} height={500}></Image></section>
                </main>
            </div>
            <div className="bg-gray-100 px-6 lg:px-24 py-12">
                <h1 className="text-center text-3xl font-bold">Why this datapack?</h1>
                <section className="w-[90%] md:w-[70%] xl:w-[60%] mx-auto pt-5 grid grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-0">
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
                        <img className="mx-auto block 2xl:w-full max-h-full" src="/images/biomes.jpg" alt="biomes"></img>
                    </div>
                    <div className="h-72 2xl:h-64 bg-gray-300 hidden xl:flex items-center">
                        <img className="mx-auto block 2xl:w-full max-h-full" src="/images/items.png" alt="treasure items"></img>
                    </div>
                    <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
                        <div>
                            <h1 className="text-2xl font-medium">Custom items</h1>
                            <p>This data pack includes over 80+ loot tables with custom armor, custom weapons, custom food, custom advancements and custom utility items and randomized stats, making many items feel unique.</p>
                        </div>
                    </div>
                    <div className="p-5 bg-gray-300 h-72 2xl:h-64 flex items-center">
                        <div>
                            <h1 className="text-2xl font-medium">Advancements</h1>
                            <p>There is a custom advancement system with 201 new advancements! This data pack introduces an insane addition of new achievements designed around the new custom features this data pack provides.</p>
                        </div>
                    </div>
                    <div className="h-72 2xl:h-64 bg-gray-300 hidden xl:flex items-center">
                        <img className="mx-auto block 2xl:w-full max-h-full" src="/images/advancements.png" alt="advancements"></img>
                    </div>
                </section>

                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Review text="So much content, I can tell a lot of work went into this, very impressive!" username={"Kefaku"} />
                    <Review text="I love this pack so much. Mining is one of those grindy things in minecraft I used to hate so much but now it's got such an allure!" username={"ThatwitchyPlayr"} />
                </div>

                <h1 className="text-center text-3xl font-bold mt-5">Compatibility</h1>
                <div className="overflow-x-auto">
                    <table className="w-[60%] mx-auto text-sm text-left text-gray-500 mt-5">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 px-6">Software</th>
                                <th scope="col" className="py-3 px-6">Compatible</th>
                                <th scope="col" className="py-3 px-6">Extra</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Spigot</td>
                                <td className="py-4 px-6 text-center"><FontAwesomeIcon icon={faCircleExclamation} className="text-yellow-400 text-xl" /></td>
                                <td className="py-4 px-6">Though not something I would recommend for having multiple data packs, it has been tested with Mine Treasure and there were only one inconsistency. Due to Spigots blocking of NBT placement, it blocks containers with NBTs in them such as a chest with loot in it, meaning if you were to place one down, it will not contain loot. If there are other problems which does arise, please join our Discord so we can further discuss the problem.</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">PaperMC</td>
                                <td className="py-4 px-6 text-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-400 text-xl" /></td>
                                <td className="py-4 px-6">No inconsistencies as of yet. However, if there are, please report it on our Discord.</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Fabric</td>
                                <td className="py-4 px-6 text-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-400 text-xl" /></td>
                                <td className="py-4 px-6">I personally recommend the use of Fabric for data packs as it performs very similar to Vanilla. However, if there appear to be issues, report it as always.</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Forge</td>
                                <td className="py-4 px-6 text-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-400 text-xl" /></td>
                                <td className="py-4 px-6">Barely tested this mod loader, but there seems to be no issue whatsoever.</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Quilt</td>
                                <td className="py-4 px-6 text-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-400 text-xl" /></td>
                                <td className="py-4 px-6">Very similar to Fabric. There has been no testing with this mod loader. However, since it is built like Fabric I am going to assume there are no issues here.</td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">Other</td>
                                <td className="py-4 px-6 text-center"><FontAwesomeIcon icon={faCircleMinus} className="text-red-400 text-xl" /></td>
                                <td className="py-4 px-6">If there are any other plug-ins/mod-related issues which is incompatible with Mine Treasure, please report it on our Discord so it may be resolved in a future update.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* className="p-1 md:p-3 text-center md:text-left md:px-10 bg-blue-500 rounded-full" */}
                <a href="https://www.planetminecraft.com/data-pack/mine-treasure/" className="block w-52 mt-5 px-10 p-3 text-center text-white mx-auto bg-blue-500 rounded-full">Start playing <FontAwesomeIcon icon={faArrowRight} className="align-middle" /></a>
            </div>
            <Footer />
        </>
    )
}

export default index
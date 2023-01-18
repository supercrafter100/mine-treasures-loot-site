import { faCircleExclamation, faCircleMinus, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { ReactChild } from 'react'
import Footer from '../components/Footer'

const home = () => {
    return (
        <div className="h-full">
            <section id="landing1" className='h-screen flex items-center px-16'>
                <div className="max-w-5xl mx-auto">
                    <Image src={"/images/Mine_Treasure.png"} alt="Mine treasure logo" width={842} height={596} />
                </div>
            </section>
            <section id="text-1" className="h-72 bg-gray-800 flex items-center">
                <div className="mx-auto">
                    <h1 className="text-6xl text-center pt-5 font-bold bg-clip-text bg-gradient-to-br from-purple-500 to-purple-400 text-transparent">About</h1>
                    <p className="text-xl text-gray-300 text-center mt-5 max-w-4xl mx-auto">
                        Ever gotten tired of mining endlessly with no goal in mind? No motivation to go strip-mining? No means to go on this repetitive task for ores? Well, this data pack aims to change exactly that.
                    </p>
                </div>
            </section>
            <section id="landing2" className="h-[150vh] md:h-[100vh] xl:h-[50vh] px-20 py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
                <Card title={"Custom treasure"}>
                    This data pack introduces a whole new way of approaching mining with a huge reward system. Treasure has a chance to spawn when mining a stone-related block. These treasures are divided into several different tiers: Common, Rare, Epic and Legendary.
                </Card>
                <Card title={"Biome specific"}>
                    There are biome-specific treasures depending on which biome the player is in, which also motivates different bases in different biomes.
                </Card>
                <Card title={"Custom items"}>
                    This data pack includes over 80+ loot tables with custom armor, custom weapons, custom food, custom advancements and custom utility items and randomized stats, making many items feel unique.

                </Card>
                <Card title={"Custom advancements"}>
                    There is a custom advancement system with 200+ new advancements! This data pack introduces an insane addition of new achievements designed around the new custom features this data pack provides.
                </Card>
            </section>
            <section id="text-1" className="bg-gray-800 flex items-center">
                <div className="mx-auto mt-5">
                    <h1 className="text-6xl text-center pt-5 font-bold bg-clip-text bg-gradient-to-br from-purple-500 to-purple-400 text-transparent">Compatibility</h1>
                    <div className="overflow-x-auto">
                        <table className="w-[80%] md:w-[60%] mx-auto text-sm text-left text-gray-500 mt-5">
                            <thead className="text-xs text-gray-300 uppercase bg-green-600">
                                <tr>
                                    <th scope="col" className="py-3 px-6">Software</th>
                                    <th scope="col" className="py-3 px-6">Compatible</th>
                                    <th scope="col" className="py-3 px-6">Extra</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow software="Realms" compatible="depends">
                                    If you have the data pack on realms you may notice that the overworld treasure are not working sometimes. The reason for this is quite peculiar. I first discovered this Realms bug when I asked the bug reporters to show me the files of Mine Treasure. It turns out Realms is programmed to rename every folder that has the name "World" in it to correspond with the Realms' name, which also includes data pack folders. Meaning the overworld folder Mine Treasure uses is renamed to over(REALMS NAME), hopefully this bug gets patched by Mojang in an upcoming version.
                                </TableRow>
                                <TableRow software="Spigot" compatible="depends">
                                    Though not something I would recommend for having multiple data packs, it has been tested with Mine Treasure and there were only one inconsistency. Due to Spigots blocking of NBT placement, it blocks containers with NBTs in them such as a chest with loot in it, meaning if you were to place one down, it will not contain loot. If there are other problems which does arise, please join our Discord so we can further discuss the problem.
                                </TableRow>
                                <TableRow software="PaperMC" compatible="yes">
                                    No inconsistencies as of yet. However, if there are, please report it on our Discord.
                                </TableRow>
                                <TableRow software="Fabric" compatible="yes">
                                    I personally recommend the use of Fabric for data packs as it performs very similar to Vanilla. However, if there appear to be issues, report it as always.
                                </TableRow>
                                <TableRow software="Forge" compatible="yes">
                                    Barely tested this mod loader, but there seems to be no issue whatsoever.
                                </TableRow>
                                <TableRow software="Quilt" compatible="yes">
                                    Very similar to Fabric. There has been no testing with this mod loader. However, since it is built like Fabric I am going to assume there are no issues here.
                                </TableRow>
                                <TableRow software="Other" compatible="no" showBorder={false}>
                                    If there are any other plug-ins/mod-related issues which is incompatible with Mine Treasure, please report it on our Discord so it may be resolved in a future update.
                                </TableRow>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section className="bg-gray-800">

                <h1 className="text-6xl text-center pt-5 font-bold bg-clip-text bg-gradient-to-br from-purple-500 to-purple-400 text-transparent">Reviews</h1>
                <div className="h-44 flex items-center relative w-full">
                    <ReviewConveyor />
                </div>
            </section>

        </div>
    )
}

function Card({ title, children }) {
    return <div className="w-full h-full p-5 bg-gray-800">
        <div className="h-1/4 flex items-center justify-center w-full">
            <h1 className="text-4xl text-center font-bold bg-clip-text bg-gradient-to-br from-purple-500 to-purple-400 text-transparent">{title}</h1>
        </div>
        <div className="h-3/4 flex items-center justify-center">
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
                {children}
            </p>
        </div>
    </div>
}

function TableRow({ software, compatible, children, showBorder = true }: { software: string, compatible: 'yes' | 'no' | 'depends', children: ReactChild, showBorder?: boolean }) {

    const compatibilityIcon = compatible == 'yes' ? faCircleCheck : compatible == 'no' ? faCircleMinus : faCircleExclamation;
    const iconColour = compatible == 'yes' ? 'text-green-400' : compatible == 'no' ? 'text-red-400' : 'text-yellow-400';

    return <tr className={"bg-gray-900  " + (showBorder ? "border-b-gray-600 border-b" : "")}>
        <td className="py-4 px-6 font-medium text-gray-300 whitespace-nowrap text-lg">{software}</td>
        <td className="py-4 px-6 text-center"><FontAwesomeIcon icon={compatibilityIcon} className={"text-xl " + iconColour} /></td>
        <td className="py-4 px-6 text-gray-300">{children}</td>
    </tr>
}

function ReviewConveyor() {
    const reviews = [
        {
            name: "Supercrafter100",
            content: "Such a cool data pack! I love it!"
        },
        {
            name: "Kefaku",
            content: "So much content, I can tell a lot of work went into this, very impressive!"
        },
        {
            name: "ThatwitchyPlayr",
            content: "I love this pack so much. Mining is one of those grindy things in minecraft I used to hate so much but now it's got such an allure!"
        },
        {
            name: "Frozytime",
            content: "Herobrine, I like balls"
        },
        {
            name: "Sacred",
            content: "Uwu, I love this pack, it's so cute!"
        },
        {
            name: "IDuckz_",
            content: "Quack quack. This pack is so cool, I love it!"
        },
        {
            name: "htcs",
            content: "Fuck those other packs. This one is superior. Love you frozy"
        }
    ]

    return (
        <div className="w-screen overflow-hidden">
            <div className="animate-scroll flex flex-shrink-0 min-w-full gap-5">
                {reviews.map((review, index) => <Review key={index} player={review.name} content={review.content} />)}
                {reviews.map((review, index) => <Review key={index} player={review.name} content={review.content} />)}
                {reviews.map((review, index) => <Review key={index} player={review.name} content={review.content} />)}
            </div>
        </div>
    )
}

function Review({ player, content }) {
    return <div className="bg-gray-900 p-2 rounded-lg duration-[10s] transition-transform w-full flex">
        <div className="flex justify-center items-center w-full h-full flex-shrink-0">
            <span className="text-sm font-medium text-gray-300 inline-block">"{content}"</span>
            <Image width={24} height={24} src={`https://cravatar.eu/helmavatar/${player}.png`} alt={player} className="ml-5 rounded-full inline-block" />
            <div className="flex items-center divide-x-2 divide-gray-500">
                <cite className="font-medium text-gray-300">{player}</cite>
            </div>
        </div>
    </div>
}

export default home
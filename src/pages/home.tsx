import Image from 'next/image'
import React from 'react'

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
                    <h1 className="text-white text-6xl text-center pt-5 font-bold">About</h1>
                    <p className="text-xl text-white text-center mt-5 max-w-4xl mx-auto">
                        Ever gotten tired of mining endlessly with no goal in mind? No motivation to go strip-mining? No means to go on this repetitive task for ores? Well, this data pack aims to change exactly that.
                    </p>
                </div>
            </section>
            <section id="landing2" className="h-[150vh] md:h-[100vh] xl:h-[50vh] px-20 py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
                <div className="w-full h-full bg-gray-700 opacity-90">
                </div>
                <div className="w-full h-full bg-gray-700 opacity-90">

                </div>
                <div className="w-full h-full bg-gray-700 opacity-90">

                </div>
                <div className="w-full h-full bg-gray-700 opacity-90">

                </div>
            </section>
            <section id="text-1" className="h-72 bg-gray-800 flex items-center">
                <div className="mx-auto">
                    <h1 className="text-white text-6xl text-center pt-5 font-bold">Compatibility</h1>
                    <p className="text-xl text-white text-center mt-5 max-w-4xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur voluptatum consequatur id blanditiis repudiandae ducimus, fuga debitis saepe sit architecto ipsam alias sunt sint voluptas autem. Tempore, atque a!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default home
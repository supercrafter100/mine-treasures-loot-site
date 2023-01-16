import Head from 'next/head'
import React from 'react'
import Header from '../components/layout/Header';

const download = () => {

    const downloadFile = async (name) => {
        const blob = await fetch(`/downloads/${name}`).then((res) => res.blob());
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
            'download',
            name
        );
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    }

    return (
        <>
            <Head>
                <title>Mine Treasure | Download</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <meta name="description" content="Download the Mine-Treasure datapack here. Available for the most recent versions of Minecraft" key="desc" />
                <meta property="og:title" content="Download | Mine Treasure" />
                <meta property="og:description" content="Download the Mine-Treasure datapack here. Available for the most recent versions of Minecraft" />
            </Head>
            <div className="bg-white px-6 lg:px-24 py-6 h-screen">
                <Header />
                <main className="mt-24">
                    <div className="mx-auto w-[70%] rounded-lg border border-blue-500 flex justify-between p-5 flex-wrap md:flex-nowrap">
                        <div className="text-center w-full text-2xl font-mono">
                            <h1>Version 1.1.1 <em>(1.19.3 ONLY)</em></h1>
                            <button onClick={() => downloadFile('mine-treasure-1.1.1.zip')} className="bg-blue-500 rounded-lg px-5 py-2 mt-5">Download</button>
                        </div>
                        <div className="text-center w-full text-2xl font-mono">
                            <h1>Version 0.0.91 <em>(1.18)</em></h1>
                            <button onClick={() => downloadFile('mine-treasure-1.18.2-0.0.91.zip')} className="bg-blue-500 rounded-lg px-5 py-2 mt-5">Download</button>
                        </div>
                    </div>
                    <h1 className="text-center text-3xl mt-12 font-mono">Trouble installing the datapack?</h1>
                    <p className="text-center">You can follow a tutorial from planetminecraft <a href="https://www.planetminecraft.com/blog/how-to-download-and-install-minecraft-data-packs/" className="text-blue-400" target={"_blank"}>here</a></p>
                </main>
            </div>
        </>
    )
}

export default download

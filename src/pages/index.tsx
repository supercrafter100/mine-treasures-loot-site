import Image from 'next/image'
import { useState } from 'react'
import Biome from '../components/Biome'
import Card from '../components/Card'
import ChanceSection from '../components/ChanceSection'
import Grid from '../components/Grid'
import ItemsCard from '../components/ItemsCard'
import Section from '../components/Section'
import useRequest from '../hooks/useRequest'
import { MT_DATA } from '../interfaces'
import Footer from '../components/Footer'
import Locations from '../components/Locations'
import Block from '../components/Block'
import Head from 'next/head'

const IndexPage = () => {

  const [customData, setCustomData] = useState<undefined | MT_DATA>();

  const [rarityData, loadedRarityData] = useRequest('/api/rarityData');
  const [blockData, loadedBlockData] = useRequest('/api/blocksData');
  const [lootData, loadedLootData] = useRequest('/api/treasureData');
  const [biomeData, loadedBiomeData] = useRequest('/api/biomeData');

  const filterData = (query) => {
    if (!loadedLootData) return;
    if (query.length === 0) { setCustomData(undefined); return };

    let filteredData = {};
    for (const biome of Object.keys(lootData)) {
      filteredData[biome] = {};
      for (const rarity of Object.keys(lootData[biome])) {
        filteredData[biome][rarity] = lootData[biome][rarity].filter((value) => (value.name?.toLowerCase() ?? value.type.replace(/_/g, ' ').toLowerCase()).includes(query.toLowerCase()))
      }
    }
    setCustomData(filteredData);
  }

  return (
    <>
      <Head>
        <title>Mine Treasure</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white px-6 lg:px-24 py-12">
        <Card background={"#00a6ed"}><p className='text-4xl font-mono text-center font-bold'>Mine Treasures</p></Card>

        {loadedRarityData && loadedBlockData && <Section>
          <header className="text-center">
            <Image src={"/items/diamond.png"} width={48} height={48} alt={"Diamond"} className="inline-block"></Image>
            <p className="font-mono text-3xl md:inline-block md:ml-5 align-middle">Rarities</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mt-5">
            {Object.keys(rarityData).map((ore, idx) => <ChanceSection key={idx} ore={ore} chance={rarityData[ore]} />)}
          </div>
          <hr className="mt-10 mb-10"></hr>
          <header className="text-center">
            <Image src={"/items/cobblestone.png"} width={48} height={48} alt={"Diamond"} className="inline-block"></Image>
            <p className="font-mono text-3xl md:inline-block md:ml-5 align-middle">Blocks</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-8 gap-2 mt-5">
            {blockData.map((block, idx) => <Block key={idx} block={block} />)}
          </div>
        </Section>
        }
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <span className="text-xl md:col-span-1">Search: </span>
            <input type="text" className="md:col-span-11 w-full rounded-xl p-2" onChange={(e) => filterData(e.target.value)}></input>
          </div>
        </Section>
        {loadedRarityData && loadedLootData && loadedBiomeData && Object.keys(customData ?? lootData).map((biome, idx) => {
          const commonData = (customData ?? lootData)[biome]["common"];
          const rareData = (customData ?? lootData)[biome]["rare"];
          const epicData = (customData ?? lootData)[biome]["epic"];
          const legendaryData = (customData ?? lootData)[biome]["legendary"];

          if (!commonData.length && !rareData.length && !epicData.length && !legendaryData.length) return "";

          return (
            <Section key={idx}>
              <Biome name={biome}></Biome>
              <Locations biomes={biomeData[biome]} />
              <Grid>
                <ItemsCard rarity={"common"} loot={(customData ?? lootData)[biome]["common"]} />
                <ItemsCard rarity={"rare"} loot={(customData ?? lootData)[biome]["rare"]} />
                <ItemsCard rarity={"epic"} loot={(customData ?? lootData)[biome]["epic"]} />
                <ItemsCard rarity={"legendary"} loot={(customData ?? lootData)[biome]["legendary"]} />
              </Grid>
            </Section>
          )
        })}
        <Footer />
      </div>

    </>
  )
}

export default IndexPage

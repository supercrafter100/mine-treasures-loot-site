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

const IndexPage = () => {

  const [customData, setCustomData] = useState<undefined | MT_DATA>();

  const [rarityData, loadedRarityData] = useRequest('/api/rarityData');
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
    <div className="bg-white px-6 lg:px-24 py-12">
      <Card background={"#00a6ed"}><p className='text-4xl font-mono text-center font-bold'>Mine Treasures</p></Card>

      {loadedRarityData && <Section>
        <header className="text-center">
          <Image src={"/items/diamond.png"} width={48} height={48} alt={"Diamond"} className="inline-block"></Image>
          <p className="font-mono text-3xl md:inline-block md:ml-5 align-middle">Rarities</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mt-5">
          {Object.keys(rarityData).map((ore, idx) => <ChanceSection key={idx} ore={ore} chance={rarityData[ore]} />)}
        </div>
      </Section>
      }
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <span className="text-xl md:col-span-1">Search: </span>
          <input type="text" className="md:col-span-11 w-full rounded-xl p-2" onChange={(e) => filterData(e.target.value)}></input>
        </div>
      </Section>
      {loadedLootData && loadedBiomeData && Object.keys(customData ?? lootData).map((biome, idx) => {
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
  )
}

export default IndexPage

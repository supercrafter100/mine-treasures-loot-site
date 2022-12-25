import Image from 'next/image'
import { useEffect, useState } from 'react'
import Biome from '../components/Biome'
import ChanceSection from '../components/ChanceSection'
import Grid from '../components/Grid'
import ItemsCard from '../components/ItemsCard'
import Section from '../components/Section'
import useRequest from '../hooks/useRequest'
import { MT_DATA } from '../interfaces'
import Footer from '../components/Footer'
import Locations from '../components/Locations'
import Head from 'next/head'
import Navbar from '../components/layout/Navbar'
import MultiSelect from '../components/form/MultiSelect'
import Toggle from '../components/form/Toggle'

const IndexPage = () => {

  // Filters
  const [customData, setCustomData] = useState<undefined | MT_DATA>();

  const [queryString, setQueryString] = useState("");
  const [selectedTreasures, setSelectedTreasures] = useState([]);
  const [selectedRarities, setSelectedRarities] = useState([]);
  const [customItemsOnly, setCustomItemsOnly] = useState(false);

  const [commonChance, setCommonChance] = useState(0);
  const [rareChance, setRareChance] = useState(0);
  const [epicChance, setEpicChance] = useState(0);
  const [legendaryChance, setLegendaryChance] = useState(0);

  const filterData = (query) => {
    if (!loadedLootData) return;

    const validBiomes = selectedTreasures.map(t => t.value);
    const validRarities = selectedRarities.map(t => t.value);

    let filteredData = {};
    let biomes = Object.keys(lootData);
    biomes = validBiomes.length ? biomes.filter(b => validBiomes.includes(b)) : biomes;


    for (const biome of biomes) {
      filteredData[biome] = {};
      for (const rarity of Object.keys(lootData[biome])) {
        if (validRarities.length && !validRarities.includes(rarity)) {
          filteredData[biome][rarity] = [];
          continue;
        }
        filteredData[biome][rarity] = lootData[biome][rarity].filter((value) => (value.name?.toLowerCase() ?? value.type.replace(/_/g, ' ').toLowerCase()).includes(query.toLowerCase()));
        if (customItemsOnly) filteredData[biome][rarity] = filteredData[biome][rarity].filter((value) => value.name !== undefined);
      }
    }

    setCustomData(filteredData);
  }

  useEffect(() => {
    filterData(queryString);
  }, [selectedTreasures, selectedRarities, queryString, customItemsOnly])

  const clearFilters = () => {
    setSelectedTreasures([]);
    setSelectedRarities([]);
    setCustomItemsOnly(false);
    setQueryString("");
  }

  // Rarity data
  const [rarityData, loadedRarityData] = useRequest('/api/rarityData');
  const [lootData, loadedLootData] = useRequest('/api/treasureData');
  const [biomeData, loadedBiomeData] = useRequest('/api/biomeData');
  const [initialChanceData, loadedInitialChanceData] = useRequest('/api/initialChances');

  useEffect(() => {
    if (initialChanceData) {
      setCommonChance(initialChanceData.common);
      setRareChance(initialChanceData.rare);
      setEpicChance(initialChanceData.epic);
      setLegendaryChance(initialChanceData.legendary);
    }
  }, [loadedInitialChanceData]);

  return (
    <>
      <Head>
        <title>Mine Treasure | Loot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white px-6 lg:px-24 py-12">
        <Navbar />
        {loadedRarityData && loadedLootData && loadedInitialChanceData && <>
          <Section>
            <div>
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="search" value={queryString} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" onChange={(e) => setQueryString(e.target.value)}></input>
              </div>
              <p className="font-medium mt-4">Output values</p>
              <div className="grid grid-cols-2 md:grid-cols-4 mt-2 gap-4">
                <div>
                  <label htmlFor="commonChance">Common chance</label>
                  <input type="number" id="commonChance" value={commonChance} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5" onChange={(e) => setCommonChance(parseInt(e.target.value))} />
                </div>
                <div>
                  <label htmlFor="rareChance">Rare chance</label>
                  <input type="number" id="rareChance" value={rareChance} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5" onChange={(e) => setRareChance(parseInt(e.target.value))} />
                </div>
                <div>
                  <label htmlFor="epicChance">Epic chance</label>
                  <input type="number" id="epicChance" value={epicChance} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5" onChange={(e) => setEpicChance(parseInt(e.target.value))} />
                </div>
                <div>
                  <label htmlFor="legendaryChance">Legendary chance</label>
                  <input type="number" id="legendaryChance" value={legendaryChance} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5" onChange={(e) => setLegendaryChance(parseInt(e.target.value))} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="font-medium">Filters</p>
                <button className="px-4 py-2 bg-white hover:bg-gray-200 text-sm font-medium rounded-md" onClick={() => clearFilters()}>Reset Filter</button>
              </div>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                  <div>
                    <p className="text-sm font-medium">Treasure types</p>
                    <MultiSelect options={Object.keys(lootData).map(biome => { return { name: biome.replace(/_/g, ' '), value: biome } })} standard={""} selected={selectedTreasures} setSelected={setSelectedTreasures} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Rarity types</p>
                    <MultiSelect options={[{ name: "Common", value: "common" }, { name: "Rare", value: "rare" }, { name: "Epic", value: "epic" }, { name: "Legendary", value: "legendary" }]} standard={""} selected={selectedRarities} setSelected={setSelectedRarities} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Custom items only</p>
                    <Toggle setToggled={setCustomItemsOnly} toggled={customItemsOnly} />
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <Section>
            <header className="text-center">
              <Image src={"/items/diamond.png"} width={48} height={48} alt={"Diamond"} className="inline-block"></Image>
              <p className="font-mono text-3xl md:inline-block md:ml-5 align-middle">Rarities</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 mt-5">
              {Object.keys(rarityData).map((ore, idx) => <ChanceSection key={idx} ore={ore} chance={rarityData[ore]} rarityValues={{ common: commonChance, rare: rareChance, epic: epicChance, legendary: legendaryChance }} />)}
            </div>
          </Section>
        </>
        }
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

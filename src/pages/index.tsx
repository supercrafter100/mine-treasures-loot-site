import Image from 'next/image'
import Biome from '../components/Biome'
import Card from '../components/Card'
import ChanceSection from '../components/ChanceSection'
import Grid from '../components/Grid'
import ItemsCard from '../components/ItemsCard'
import Rarity from '../components/Rarity'
import Section from '../components/Section'
import useRequest from '../hooks/useRequest'

const IndexPage = () => {
  const [rarityData, loadedRarityData] = useRequest('/api/rarityData');
  const [lootData, loadedLootData] = useRequest('/api/treasureData');

  return (
    <div className="bg-white px-6 lg:px-24 py-12">
      <Card background={"#00a6ed"}><p className='text-4xl font-mono text-center font-bold'>Mine Treasures</p></Card>

      {loadedRarityData && <Section>
        <header className="text-center">
          <Image src={"/items/diamond.png"} width={48} height={48} alt={"Diamond"} className="inline-block"></Image>
          <p className="font-mono text-3xl md:inline-block md:ml-5 align-middle">Rarities</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mt-5">
          {Object.keys(rarityData).map((ore, idx) => <ChanceSection ore={ore} chance={rarityData[ore]} />)}
        </div>
      </Section>
      }
      {loadedLootData && Object.keys(lootData).map((biome, idx) => {
        return (
          <Section key={idx}>
            <Biome name={biome}></Biome>
            <Grid>
              <ItemsCard rarity={"common"} loot={lootData[biome]["common"]} />
              <ItemsCard rarity={"rare"} loot={lootData[biome]["rare"]} />
              <ItemsCard rarity={"epic"} loot={lootData[biome]["epic"]} />
              <ItemsCard rarity={"legendary"} loot={lootData[biome]["legendary"]} />
            </Grid>
          </Section>
        )
      })}
    </div>
  )
}

export default IndexPage

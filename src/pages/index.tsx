import Biome from '../components/Biome'
import Card from '../components/Card'
import Grid from '../components/Grid'
import ItemsCard from '../components/ItemsCard'
import Rarity from '../components/Rarity'
import Section from '../components/Section'
import useRequest from '../hooks/useRequest'

const IndexPage = () => {
  const [data, loaded] = useRequest('/api/treasureData');

  return (
    <div className="bg-white px-24 py-12">
      <Card background={"#00a6ed"}><p className='text-4xl font-mono text-center font-bold'>Mine Treasures</p></Card>
      {loaded && Object.keys(data).map((biome, idx) => {
        return (
          <Section key={idx}>
            <Biome name={biome}></Biome>
            <Grid>
              <ItemsCard rarity={"common"} loot={data[biome]["common"]} />
              <ItemsCard rarity={"rare"} loot={data[biome]["rare"]} />
              <ItemsCard rarity={"epic"} loot={data[biome]["epic"]} />
              <ItemsCard rarity={"legendary"} loot={data[biome]["legendary"]} />
            </Grid>
          </Section>
        )
      })}
    </div>
  )
}

export default IndexPage

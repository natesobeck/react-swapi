import { useEffect, useState } from "react"
import { getStarships } from "../../services/sw-api"
import Starship from "./Starship"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState({})

  useEffect(() => {
    async function fetchStarshipList() {
      const starshipData = await getStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading Starships...</h1>

  return (  
    <main>
      {starshipList.map(starship => 
        <Starship key={starship.name} starship={starship}/>
      )}
    </main>
  )
}

export default StarshipList
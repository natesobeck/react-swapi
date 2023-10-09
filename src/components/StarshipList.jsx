import { useEffect, useState } from "react"
import { getStarships } from "../../services/sw-api"

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
      {starshipList.map(starship => <div key={starship.name}>{starship.name}</div>)}
    </main>
  )
}

export default StarshipList
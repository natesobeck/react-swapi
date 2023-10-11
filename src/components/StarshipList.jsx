// npm modules
import { useEffect, useState } from "react"

//api calls
import { getStarships } from "../../services/sw-api"

//components
import Starship from "./Starship"

//css
import './StarshipList.css'

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
      {starshipList.map(starship=> 
        <Starship key={starship.name} starship={starship} />
      )}
    </main>
  )
}

export default StarshipList
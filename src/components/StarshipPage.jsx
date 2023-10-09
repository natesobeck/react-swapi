import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getStarship } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipPage = () => {
  const [starship, setStarship] = useState({})
  const { starshipName } = useParams()

  useEffect(() => {
    async function fetchStarship() {
      const starshipData = await getStarship(starshipName)
      setStarship(starshipData)
    }
    fetchStarship()
  }, [starshipName])

  if (!starship.name) return <h1>Loading Starship...</h1>

  return (
    <main>
      <h3>NAME: {starship.name}</h3>
      <p>MODEL: {starship.model}</p>
      <Link to={`/starships`}>RETURN</Link>
    </main>
  )
}
export default StarshipPage
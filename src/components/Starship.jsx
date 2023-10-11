import { Link } from "react-router-dom"

const Starship = (props) => {
  return (
  <div className='starship-card'>
    <Link to={`/starships/${props.starship.url.slice(32)}`}>{props.starship.name}</Link>
  </div>
  )
}


export default Starship
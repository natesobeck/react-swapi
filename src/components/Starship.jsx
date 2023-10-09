import { Link } from "react-router-dom"

const Starship = (props) => {
  return (<Link to={`/starships/${props.id}`}>{props.starship.name}</Link>)
}

export default Starship
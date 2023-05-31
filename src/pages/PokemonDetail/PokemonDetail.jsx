import { useParams } from "react-router-dom"
import './PokemonDetail.css'

const PokemonDetail = () => {
  const {pokemonId} = useParams()  

  return (
    <div className="container_detail">
        <h1>Pokemon Detail</h1> 
        <p>Aqui se evidenciara mas detalles sobre el pokemon con el ID: {pokemonId}</p>
    </div>
  )
}

export default PokemonDetail
import { useParams } from "react-router-dom"

const PokemonDetail = () => {
  const {pokemonId} = useParams()  

  return (
    <div>
        <h1>Pokemon Detail</h1> 
        <p>Aqui se evidenciara mas detalles sobre el pokemon con el ID: {pokemonId}</p>
    </div>
  )
}

export default PokemonDetail
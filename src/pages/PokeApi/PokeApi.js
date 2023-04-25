import { MainTitle, PokeContainer, InputStyled, InputContainer, ButtonContainer  } from "./PokeApiStyled"
import { useState, useEffect } from "react"
import axios from "axios"
import PokemonCard from "../../components/PokemonCard/PokeCard/PokemonCard"
import PokemonLogo from '../../assets/home/pokemon.png'
import PokemonError from "../../components/PokemonCard/PokeError/PokeError"




const PokeApi = () => {
  useEffect(()=>{
    document.title = 'Pokemon - Search'
  }, [])

  const initialPokemon = {
    name: 'Este es un ejemplo de un Pokemon', 
    height: 0.0, 
    weight: 0.0, 
    sprites: {
      other: {
        home:{
          front_default: PokemonLogo
        }
      } 
    }
  }

  const [inputNum, setInputNum] = useState('')
  const [error, setError] = useState(null)
  const [data, setData] = useState(initialPokemon)

  const handlePokemon = async (id) => {
    setError(null)
    setData(null)

    try {
      const idSearch = parseInt(id)
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idSearch}`)
      setData(data)
    } catch (error) {
      console.log(error, 'error de la api request')
      setError('Pokemon no encontrado, intenta con otro ID')
      setData(null)
    }
  }



  const handleInput = e => {
    setInputNum((e.target.value))
  }

  const searchPokemon = e => {
    e.preventDefault();

    if (inputNum === ''){
      alert("Por favor ingrese un ID")
    };

    handlePokemon(inputNum)
    setInputNum('')
  }


  return (

    <PokeContainer>
      <MainTitle>Encuentra tu Pokemon Favorito!</MainTitle>
      <InputContainer onSubmit={searchPokemon} title="Buscá un Pokemon por ID">
        <InputStyled
          type="number"
          onChange={handleInput}
          value={inputNum}
          autoComplete="off"
          placeholder="Ingrese el ID del Pokemon"
        />
        <ButtonContainer type="submit" title="Buscar Pokemons">Buscar</ButtonContainer>


      </InputContainer>

      
      {error && <PokemonError error={error}/>}
      {data && <PokemonCard {...data}/>}
    </PokeContainer>

  )
}
export default PokeApi
import { ErrorContainer, ErrorImg } from './PokeErrorStyled'
const PokemonError = ({error}) => {
  return (
    <ErrorContainer>
       <h1>Opps! Algo salió mal</h1>
       <p>Prueba con un ID diferente</p>
    </ErrorContainer>
  )
}
export default PokemonError
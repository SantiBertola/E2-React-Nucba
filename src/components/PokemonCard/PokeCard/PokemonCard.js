import { CardContainer, CardImg, CardTexts, CardTitle } from "./PokemonCardStyled"

const PokemonCard = (data) => {
const {name, height, weight, sprites} = data;
  return (
    <CardContainer>
        <CardTitle>{name.toUpperCase()}</CardTitle>
        <CardImg src={sprites?.other.home.front_default} alt={name} />
        <CardTexts>Altura: {height/10} Metros</CardTexts>
        <CardTexts>Peso: {weight/10} Kilogramos</CardTexts>
    </CardContainer>
  )
}
export default PokemonCard